# 接続後のMyMem Connectを丸く畳む（2026-11-04）

Ishizaka。MyMemOS資料1.0.1・PRO/Docs主版0.36.4を維持するUI修正。

- サイドパネルを開く処理の成功通知後、表紙右下のConnectからラベルを省いて48px円形ボタン/32pxアイコンへ畳む。押し直した際も丸いまま待機表示と再操作ができる。最初の失敗では畳まない。
- 同じ資料文書の中でページをめくって表紙へ戻っても丸い表示を保つ。状態はDOM内の一時フラグのみで、DB/保存JSON/ZIPやブラウザーの永続ストレージを追加しない。拡張プロトコルは変更しない。
- 既存の空Chromeスモークに、実パネルopen後の48px正円/ラベル非表示、スライド往復で保持、丸いままでの実再openを追加し全項目成功。従来の未導入非表示/表紙限定/印刷除外/合成click拒否/単回claim/再読込で起動しない/失敗表示/日英/390pxも成功。実アカウント・音声・マイク・AIは使わない。
- OSの本番build/型確認が成功。利用ガイドと実画面1枚を追加。今回レビューしたOSコンポーネントと既存スモークの2hashだけを更新し、他の全hashを維持する。Web/Docs公開と検証の最終結果は完了後に追記する。

## 最終公開確認

- OSのUI commit 3d7c961699dfb2a275c98f2393729818ebed4ee2を既存feature/mainへ通常push。本番dpl_GjFyPdpTakoENDNLi13whijBKXsUがREADY、os.mymem.netへ割当済み。実公開のページで、接続後の48px円形・ラベル非表示・資料往復での保持・丸い状態での実パネル再openがすべて成功した。
- PROの既存スモーク拡張と記録は764de1fを既存作業ブランチへ通常push。他の作業中の変更は含めない。Web/拡張の版番号と通常配布は変更していない。
- Docs原稿f41a53c8をorigin/main、検証済みbuild 613184efd58ccadf9826469a52398a464db568eeをorigin/gh-pagesへ通常push。Pages built/error.message null、CNAME/.nojekyll/robots.txtの同一hashを確認。
- Docs validate/test8/local verifyと公開verify 2026-11-04T13:04:41.685Z が成功。PC113/モバイル112・両テーマ・全54画像・リンク/アンカー、サバ缶6ページの開発中表記が成功し、例外/取得失敗/横はみ出し/画像・文書再試行0。新しい丸いアイコンの説明と画像をHTTP200・元バイトSHA一致で別途確認した。
- 今回レビューした2根拠だけhashを更新し、他の全hashを維持。既存source差分52件は全照合の成功としない。元のDocs作業中変更へ今回分だけを非破壊で反映し、基本check（67画像）も成功。DB/JSON/ZIPや永続ストレージの追加なし。
- MyMemOS資料1.0.1、PRO/Docs主版0.36.4を維持。利用ガイド：https://docs.mymem.net/docs/guides/chatgpt-voice-sync/#presentation-connect 。この最終確認記録も通常pushする。

証跡：`../research-reports/presentation-connect-compact-2026-11-04/`。
