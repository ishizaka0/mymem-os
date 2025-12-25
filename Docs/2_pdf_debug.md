# 修正指示書・設計指示書

## PDF出力（html2canvas）における oklch 回避：選択肢B

---

## 方針サマリ（最重要）

- **方式は維持**
    -   html2canvas + jsPDF
    -   クライアント完結
- **Tailwindは維持**
- **PDF生成時のみ**
    -   html2canvas の `onclone` を使い
    -   clone DOM 側の色系スタイルを **強制的に RGB に変換**
- 元DOM・通常表示には一切影響を与えない

---

## 問題の整理（前提）

- Tailwind の色トークンは `oklch()` を内部生成する
- html2canvas 1.4.1 は `oklch()` 非対応
- CSSを直接いじると影響範囲が広すぎる
- よって **clone DOM を加工する onclone が最小影響で最適**

---

## 採用設計：onclone 強制RGB化

### 設計思想

- html2canvas が **解析するのは clone DOM**
- clone DOM であれば
    -   inline style を書き換えても安全
    -   Tailwind / globals.css を触らずに済む
- 「PDF生成専用の世界」を一時的に作るイメージ

---

## 実装仕様

### 対象

- PDF出力処理（例：`handleDownloadPDF`）
- 対象DOM：`#pdf-export-root`

---

## 実装詳細

### 1\. PDF生成処理に `onclone` を追加

```ts
const handleDownloadPDF = async () => {
  try {
    setIsExportingPDF(true);
    await new Promise((r) => setTimeout(r, 50));

    const element = document.getElementById("pdf-export-root");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,

      onclone: (clonedDoc) => {
        const root = clonedDoc.getElementById("pdf-export-root");
        if (!root) return;

        root.querySelectorAll("*").forEach((el) => {
          const style = (el as HTMLElement).style;

          // 色系をすべて安全なRGBへ
          style.color = "rgb(0, 0, 0)";
          style.backgroundColor = "rgb(255, 255, 255)";
          style.borderColor = "rgb(0, 0, 0)";
          style.outlineColor = "rgb(0, 0, 0)";
          style.textDecorationColor = "rgb(0, 0, 0)";

          // 視覚効果系は無効化
          style.boxShadow = "none";
          style.textShadow = "none";
          style.filter = "none";
        });
      },
    });

    // jsPDF 側は既存ロジックを使用
  } catch (err) {
    console.error("PDF生成失敗", err);
    toast.error("PDF生成に失敗しました");
  } finally {
    setIsExportingPDF(false);
  }
};
```

---

## 2\. なぜこの指定が必要か（設計根拠）

| プロパティ | 理由 |
| --- | --- |
| color | text-foreground → oklch の主犯 |
| backgroundColor | bg-background → oklch |
| borderColor | border-border → oklch |
| outlineColor | outline-ring/50 → oklch |
| textDecorationColor | underline 系で oklch が出る |
| boxShadow / textShadow | 影の色成分で事故るため |
| filter | Tailwind の filter 系保険 |

---

## 3\. やらないこと（重要）

- globals.css を触らない
- Tailwind 設定をいじらない
- `all: unset` は使わない
- html2canvas の fork / パッチはしない

---

## 4\. document.write Warning について

```
[Violation] Avoid using document.write()
```

- html2canvas 内部実装によるもの
- 回避不可
- **無視してよい**
- 本修正とは無関係

---

## 動作確認チェックリスト

- PDF生成時に以下エラーが出ない
    -   `Attempting to parse an unsupported color function "oklch"`
- PDFが正常にダウンロードされる
- 通常画面の色・テーマに変化がない
- ダークモードでも PDF は白地黒文字になる（仕様どおり）

---

## 制約と割り切り（明文化）

- PDFは「簡易エクスポート」
- デザイン忠実度は追わない
- 色は **白地・黒文字基準**
- Tailwindの見た目をPDFに完全再現しない

---

## 将来の拡張余地（設計メモ）

- 本実装は **暫定・現実解**
- 将来：
    -   PDF専用DOM（Tailwind不使用）
    -   Server-side PDF（Playwright等）  
        へ差し替え可能

---

⚠️ PDF出力に関する設計上の注意

画面UIとPDF出力は、目的が異なるため同一DOMでは成立しない。
PDF出力は「印刷」として設計し、専用DOMを用意する。

DOMキャプチャやCanvas変換によるPDF生成は、
品質・速度・保守性の観点から採用しない。

---

## 最終判断まとめ

- 選択肢Bは **最小改修・最大効果**
- 調査結果と完全に整合
- 技術的リスクを理解した上での正しい妥協点
