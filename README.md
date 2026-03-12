# Modal Window Practice

JavaScriptのDOM操作を使って、モーダルウィンドウの表示・非表示を実装する練習です。

## Overview
開くボタンをクリックするとモーダルを表示し、閉じるボタンをクリックするとモーダルを非表示にするシンプルなUIを作成しました。

## Features
- 開くボタンでモーダル表示
- 閉じるボタンでモーダル非表示
- overlayで画面全体を覆うモーダル背景

## Technologies
- HTML
- CSS
- JavaScript

## What I Learned
今回の学習で理解したポイント

- `querySelector` を使ったDOM要素の取得
- `addEventListener` を使ったクリックイベント処理
- `hidden` 属性による表示 / 非表示の切り替え
- `position: fixed` と `inset: 0` を使ったoverlayの作成

## Code Flow
処理の流れ

1. 開くボタンを取得
2. 閉じるボタンを取得
3. モーダル全体を取得
4. 開くボタンがクリックされたら `hidden` を外す
5. 閉じるボタンがクリックされたら `hidden` を付ける

## Future Improvements
- モーダル外クリックで閉じる機能
- ESCキーで閉じる機能
- アニメーション追加
