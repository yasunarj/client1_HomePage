# 栃木サウナ熱波協会 公式サイト

栃木サウナ熱波協会の公式 Web サイトです。  
栃木を中心に活動する熱波師たちの情報発信と、各サウナ施設での熱波イベントの窓口となることを目的として制作しています。

- 本番 URL: https://www.tochigi-sauna-neppakyoukai.jp

---

## サイト概要

サウナ施設に出向いて熱波イベントを行う「栃木の熱波師たち」の活動拠点となるサイトです。  
協会や熱波師の紹介、これまでの実績、イベントスケジュール、協力施設の紹介などを通して、  
一般のお客様や施設の担当者に向けて情報をわかりやすく伝えることを目指しています。

トップページ（`app/page.tsx`）は以下のセクションで構成されています：

```tsx
export default function Home() {
  return (
    <ClientSplashWrapper>
      <FadeInMain>
        <Header />
        <HeroSection />
        <WhatIsNeppashiSection />
        <OwnerSection />
        <ProfileSection />
        <PerformanceSection />
        <GallerySection />
        <ScheduleSection />
        {SECTIONS.social && <SocialSection />}
        <SpecialThanks />
        <TestimonialsSection />
        {SECTIONS.contact && <ContactSection />}
        <RecruitSection />
        <ScrollToTop />
        <Footer />
      </FadeInMain>
    </ClientSplashWrapper>
  );
}
```

## 主な機能 / 特徴

### 🎨 スクロール連動アニメーション
- 各セクションにフェードインやテキストアニメーションを付与
- Intersection Observer 風の仕組みで「スクロールして見えた瞬間」に発火

---

### 👤 プロフィールセクション（`ProfileSection`）
- 栃木の熱波師たちの紹介カードを表示
- `grid` を用いたレスポンシブレイアウト（スマホ〜PC対応）
- 各熱波師の Instagram / X（旧 Twitter）など SNS リンクを設置

---

### 🏢 協力施設紹介（`SpecialThanks`）
- 協力サウナ施設の情報を画像付きカードとして掲載
- `grid` によるレスポンシブ対応

---

### 🗣️ お客様の声（`TestimonialsSection`）
- イベント参加者からのレビューを掲載
- 見やすいカードレイアウト
- `grid` によるレスポンシブ対応

---

### ▶️ パフォーマンス動画（`PerformanceSection`）
- YouTube 埋め込みによる熱波パフォーマンス動画を掲載
- 初めての方にも雰囲気が伝わる構成

---

### 📅 Notion 連携スケジュール（`ScheduleSection`）
クライアントが Notion アプリを更新すると、  
**自動でサイトに最新スケジュールが反映**される仕組みです。


```ts
const res = await fetch(
  `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      filter: {
        property: "日付",
        date: {
          on_or_after: new Date().toISOString().split("T")[0],
        },
      },
      sorts: [{ property: "日付", direction: "ascending" }],
    }),
    cache: "no-store",
  }
);
```



### ⬆️ ScrollToTop
- 画面右下のボタンを押すとページ最上部へスムーズスクロール
- 長いページでも快適に操作可能

---

### 🍔 ハンバーガーメニュー（`Header`）
- モバイル対応のナビゲーション
- メニュー開閉時に上からスライド表示
- 各セクションへスムーズにスクロール移動
- `SECTIONS.social` などの設定で表示/非表示を切り替え可能

---

### 🔗 SNS / 外部リンク
- 熱波師ごと、協力施設ごとに Instagram / X（旧 Twitter）リンクを用意
- カードから直接 SNS プロフィールへ遷移可能

---

### 🧩 セクションの表示/非表示
- `SECTIONS.social`、`SECTIONS.contact` などのフラグで  
  特定のセクションを簡単に ON/OFF 可能



## 技術スタック

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Intersection Observer + CSS アニメーション
- **Data Source:** Notion API
- **Deployment:** Vercel

---

## 開発環境

- Node.js: **18 以上推奨**
- パッケージマネージャー：npm / yarn / pnpm のいずれか

---

## セットアップ

```bash
npm install
```

---

## 開発サーバー
```bash
npm run dev
```
アクセス: http://localhost:3000


## 本番ビルド
```bash
npm run build
npm start
```


## 環境変数
- Notion 連携用のシークレット情報を .env.local に設定します。
```env
NOTION_TOKEN=xxxxx
NOTION_DATABASE_ID=yyyyy
```
- .env.local は .gitignore 済みのため GitHub に公開されません。

- 本番環境では Vercel の
- Project → Settings → Environment Variables
- から同じキーで登録します。


## デプロイ
- GitHub の main へ push → Vercel が自動デプロイ
- ドメイン： tochigi-sauna-neppakyoukai.jp
- favicon や og:image を設定し、Google検索結果にも正しく表示されるよう調整済み


## ライセンス / 注意事項
- 本リポジトリは 栃木サウナ熱波協会のクライアント案件として制作されたものです。
- ロゴ、画像、文章などの著作権は各権利者に帰属します。
- コードの再配布や営利目的での利用は想定していません。

