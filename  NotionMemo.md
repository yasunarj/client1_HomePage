Notion用チャッピー
https://chatgpt.com/c/67ff442e-bc68-800d-b175-5967cb660dfc

 クライアント用のNotion接続ステップ
クライアントのNotionアカウントでログイン

https://www.notion.so/my-integrations にアクセスし
　→ 「新しいインテグレーション」を作成してもらう

Integration Token を取得（クライアントがあなたに共有する必要あり）

データベースページを作成

「イベント内容」「日付」「場所」など、同じカラム構成

インテグレーションをページに接続

Notionページの右上「...」→ 「接続」→ インテグレーション選択

その後あなたがやること
.env.local の NOTION_TOKEN と NOTION_DATABASE_ID をクライアントのものに差し替える

env
コピーする
編集する
NOTION_TOKEN=クライアントのsecret_********
NOTION_DATABASE_ID=クライアントの32桁のID

補足：環境ごとに切り替える方法（応用）
クライアントA・Bそれぞれに違うNotionを使う場合：

env
コピーする
編集する
# .env.local（開発用）
NOTION_TOKEN=secret_dev_xxxx
NOTION_DATABASE_ID=xxxxxxx

# .env.production（Vercelなど本番用）
NOTION_TOKEN=secret_client_xxxx
NOTION_DATABASE_ID=xxxxxxx
みたいに 環境ごとに切り替えられる設計もおすすめです！

まとめ

項目	内容
クライアントのNotionを使うには？	同じステップをクライアント環境で再現するだけでOK
あなたがやること	トークンとデータベースIDを .env.local に差し替えるだけ
応用	複数クライアント対応や環境ごとの切り替えも可能（.env）
