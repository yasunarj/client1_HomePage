import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    console.log("受信データ", { name, email, message });

    // ここで実際のメール送信処理やデータベースへの保存を行う
    // 例: SendGridやAWS SESを使用したメール送信
    // 例: MongoDBやPostgreSQLへのデータ保存

    // デモ用のダミー処理

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("お問い合わせ処理でエラーが発生しました:", error);
    return NextResponse.json(
      { message: "お問い合わせの処理中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
