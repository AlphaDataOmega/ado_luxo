await lspFactory.LSP8IdentifiableDigitalAsset.deploy({
    controllerAddress: '0x56fE4E7dc2bc0b6397E4609B07b4293482E3F72B',
    name: 'MYTOKEN',
    symbol: 'DEMO',
    creators: ['0x7Ab53a0C861fb955050A8DA109eEeA5E61fd8Aa4', '0x6c1F3Ed2F99054C88897e2f32187ef15c62dC560'],
    digitalAssetMetadata: {
        description: 'My NFT 2.0',
        LSP4Metadata: {
            description: "My Digital Asset",
            links: [{
                title: "LUKSO Docs",
                url: "https://docs.lukso.tech"
            }],
        }
    },
    options: [
        onDeployEvents: {
            next: (deploymentEvent) => {
                console.log(deploymentEvent);
            },
            error: (error) => {
                console.error(error);
            },
            complete: (contracts) => {
                console.log('Digital Asset deployment completed');
                console.log(contracts.LSP7DigitalAsset);
            },
        }
    ]
    
});