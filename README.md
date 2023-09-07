```bash
thirdwebのNFTDropコントラクトのアドレスをaddress.tsに貼り付け
npm i
npm run dev
```

```bash
NEXT_PUBLIC_FACTORY_ADDRESS=thirdwebのsimpleAcountFactoryコントラクトのアドレス
NEXT_PUBLIC_API_KEY=thirdwebのAPIKey
NEXT_PUBLIC_RELAYER_URL=Openzeppelin DefenderのRelayerURL
```

Layout.tsxに <ThirdwebProvider>を配置できないため（サーバーコンポーネントで使用できない）、
各ディレクトリの上位コンポーネントで配置する必要がある。

Auth機能には未対応　9/7

参考
https://github.com/ytakahashi2020/hackathon_story_nft_mumbai
