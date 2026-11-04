# MyMemOS表紙から3Dチャットを開く導線の公開（2026-11-04）

Ishizaka。MyMemOS資料は1.0.1、PRO/Docs主版は0.36.4を維持する。通常配布の拡張更新やR2配布は行わず、対応する開発ビルドの利用条件を明記する。

## 公開内容

既存の検証済み機能がfeatureブランチにあり、本番が追加前のmainを配信していた。表紙右下のMyMem Connectは、対応する拡張が通知したときだけ表示する。trusted clickから同じ資料タブのサイドパネルを開き、既存3Dチャット/ChatGPT音声同期を起動する。未導入/未対応、表紙以外、印刷/PDFでは非表示。起動は単回claimで、再読込/履歴復元だけでは再実行しない。資料やマイクを自動でAIへ送信しない。DB・保存JSON・ZIP形式の変更なし。

## Web公開

- 本番：https://os.mymem.net/ 。Vercel team ishizaka0 / project mymemos（prj_GiovBeSufFecDMpytwtr9qCU0QQF）。
- UI実装commit：acbe51dccfbdf69d81a219fec8f3839053b53af2。直前の本番は974c7364d12d9b01c6c106a0f8e5f236d2895b2e。
- 既存previewのpromote要求はHTTP422で受理されなかったため、同じ検証済みcommitをproduction向けに再ビルドした。dpl_fqgUygiumj9syvj2qySCuEBpy1JU、READY・production・alias os.mymem.netを確認。認証/承認拒否ではなく、対象リソースのAPI処理エラーだった。公開設定や環境変数は変更していない。
- 公開サイトを専用空Chromiumで直接読み込み、実拡張のConnectクリック→full production AppPanel→3Dチャット→テスト用ChatGPT音声開始1回を確認した。元の資料URLは維持、同一iframe/Canvas、360×891px、横はみ出し/例外0。契約とChatGPT画面は架空で、実アカウント・実マイク・実音声通話は未確認、実AI要求0。タブ音声権限が必要な場合の既存案内も残る。

## 検証・ドキュメント

- OS本番buildと型成功。関連4ファイル164テスト成功。最初の型確認は同時buildによる.next/types再生成中に失敗し、build完了後に再実行して成功した。
- ローカル実Nextビルド+空Chromeで、未導入時の非表示、表紙限定、印刷除外、合成click無視、実サイドパネルAPI/claim/ワークスペース起動/同梱WebGL、再読込で再起動しないこと、失敗表示、日英、390pxを確認。full AppPanelは別の通しテストでも成功。
- MyMemDocsは作業中の別変更を含めない隔離main基準の原稿で、利用ガイド/機能一覧/網羅表・画像1枚・OS実装のsource-mapを追加。Docs 0.36.4、MyMemOS参照1.0.1、確認日2026-11-04。validate、単体8件、ローカルverify PC113/モバイル112・両テーマ・53画像/リンク/アンカーが成功。公開確認は完了後に追記する。
- source checkは既存差分52件で未成功。今回新規登録した10根拠だけレビュー後にhash追加し、元のHEADにあった全hashは保持。未確認差分を一括baseline更新せず、公開根拠全照合の成功とは扱わない。

証跡：`../research-reports/presentation-connect-public-2026-11-04/`。

## 最終公開確認

- OSのUIと確認記録は6806dc9d4026eeea26e594960142f584e0fa9786としてorigin/mainと既存featureへ通常push。mainの自動本番ビルドdpl_25Gehw5QqnTng1bDuJXRJfdr9AYeがREADYでos.mymem.netへ割当済み。先に実ブラウザーで確認したacbe51dからのUIコード差分は0で、README/記録だけが追加された。
- PROの通しテストと記録は3f7cb21として既存作業ブランチへ通常push。以前からの未コミット変更は含めず保持した。
- Docs原稿42b10d0aをorigin/main、検証済みbuildを4d5823fb5bb8562449de2fbc678b2a5e4f6f27c6としてorigin/gh-pagesへ通常push。Pages built/error.message null、CNAME/.nojekyll/robots.txtの3hash維持を確認。
- 公開URL https://docs.mymem.net のverifyは2026-11-04T12:22:22.467Z、PC113/モバイル112・両テーマ・53画像・リンク/アンカー・サバ缶6ページの開発中表記が成功。取得失敗/例外/横はみ出し/画像・文書再試行0。新しいConnect節のHTTP200と表示、新画像HTTP200と元バイトSHA一致もChromeで確認した。Pythonによる直接取得はHTTP403だったため、その試行を成功扱いにせず実ブラウザーで照合した。
- 利用ガイド：https://docs.mymem.net/docs/guides/chatgpt-voice-sync/#presentation-connect 。拡張の通常配布・R2・PRO版番号は変更していない。MyMemOS資料1.0.1、Docs主版0.36.4を維持する。
- 原稿は隔離worktreeで今回分だけを公開し、元のDocs作業中変更へ今回分を非破壊で反映した。元の全baseline hashは保持。source全照合の既存差分52件は未成功のまま区別する。この最終確認記録も通常pushする。
