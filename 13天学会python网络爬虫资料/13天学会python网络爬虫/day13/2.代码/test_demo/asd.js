if (!LOLherojs) var LOLherojs = {champion: {}};
LOLherojs.champion.Aatrox = {
    "data": {
        "id": "Aatrox",
        "key": "266",
        "name": "\u6697\u88d4\u5251\u9b54",
        "title": "\u4e9a\u6258\u514b\u65af",
        "tags": ["Fighter", "Tank"],
        "image": {
            "full": "Aatrox.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
        },
        "skins": [{"id": "266000", "num": 0, "name": "default", "chromas": false}, {
            "id": "266001",
            "num": 1,
            "name": "\u4ef2\u88c1\u5723\u9a91 \u4e9a\u6258\u514b\u65af",
            "chromas": false
        }, {
            "id": "266002",
            "num": 2,
            "name": "\u9738\u5929\u5251\u9b54 \u4e9a\u6258\u514b\u65af",
            "chromas": true}
        }, {"id": "266003", "num": 3, "name": "\u72c2\u9ca8 \u4e9a\u6258\u514b\u65af", "chromas": false}],
        "info": {"attack": 8, "defense": 4, "magic": 3, "difficulty": 4},
        "spells": [{
            "id": "AatroxQ",
            "name": "\u6697\u88d4\u5229\u5203",
            "description": "\u4e9a\u6258\u514b\u65af\u5411\u4e0b\u731b\u7838\u4ed6\u7684\u5de8\u5251\uff0c\u5e76\u9020\u6210\u7269\u7406\u4f24\u5bb3\u3002\u4ed6\u53ef\u4ee5\u6325\u51fb\u4e09\u6b21\uff0c\u6bcf\u6b21\u90fd\u6709\u4e00\u4e2a\u4e0d\u540c\u7684\u8303\u56f4\u6548\u679c\u3002",
            "image": {
                "full": "AatroxQ.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 384,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u4e9a\u6258\u514b\u65af\u5411\u4e0b\u731b\u7838\u4ed6\u7684\u5de8\u5251\uff0c\u5e76\u9020\u6210<physicalDamage><scaleAD>(+)<\/scaleAD>\u7269\u7406\u4f24\u5bb3<\/physicalDamage>\u3002\u3010\u6697\u88d4\u5229\u5203\u3011\u53ef\u4ee5\u518d\u65bd\u653e2\u6b21\uff0c\u6bcf\u6b21\u90fd\u4f1a\u63d0\u5347\u4f24\u5bb3\u3002<br \/><br \/>\u6bcf\u6b21\u6325\u51fb\u90fd\u80fd\u7528\u5251\u950b\u6765\u547d\u4e2d\u654c\u4eba\uff0c\u4ee5\u9020\u6210\u77ed\u6682\u7684\u51fb\u98de\u6548\u679c\u548c\u66f4\u591a\u4f24\u5bb3\u3002",
            "leveltip": {
                "label": ["\u51b7\u5374\u65f6\u95f4", "\u4f24\u5bb3", "\u767e\u5206\u6bd4\u603b\u653b\u51fb\u529b\u589e\u957f"],
                "effect": ["16\/15\/14\/13\/12", "", "{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%"]
            },
            "resource": "\u65e0\u6d88\u8017"
        }, {
            "id": "AatroxW",
            "name": "\u6076\u706b\u675f\u94fe",
            "description": "\u4e9a\u6258\u514b\u65af\u731b\u7838\u5730\u9762\uff0c\u5bf9\u547d\u4e2d\u7684\u7b2c\u4e00\u4e2a\u654c\u4eba\u9020\u6210\u4f24\u5bb3\u3002\u82f1\u96c4\u548c\u5927\u578b\u91ce\u602a\u9700\u8981\u5feb\u901f\u79bb\u5f00\u88ab\u5f71\u54cd\u7684\u533a\u57df\uff0c\u5426\u5219\u5c31\u4f1a\u88ab\u62d6\u62fd\u5230\u4e2d\u5fc3\u5e76\u518d\u6b21\u53d7\u5230\u4f24\u5bb3\u3002",
            "image": {
                "full": "AatroxW.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 432,
                "y": 48,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u4e9a\u6258\u514b\u65af\u731b\u7838\u5730\u9762\uff0c\u5bf9\u547d\u4e2d\u7684\u7b2c\u4e00\u4e2a\u654c\u4eba\u9020\u6210<physicalDamage>{{ spell.aatroxw:wbasedamage }}<scaleAD>(+{{ spell.aatroxw:wtotaladratiodamage }})<\/scaleAD>\u7269\u7406\u4f24\u5bb3<\/physicalDamage>\u548c{{ spell.aatroxw:wslowpercentage*-100 }}%\u51cf\u901f\u6548\u679c\uff0c\u6301\u7eed{{ spell.aatroxw:wslowduration }}\u79d2\u3002<br \/><br \/>\u82f1\u96c4\u6216\u5927\u578b\u91ce\u602a\u9700\u8981\u5728{{ spell.aatroxw:wslowduration }}\u79d2\u5185\u5feb\u901f\u79bb\u5f00\u88ab\u5f71\u54cd\u7684\u533a\u57df\uff0c\u5426\u5219\u5c31\u4f1a\u88ab\u62d6\u62fd\u5230\u4e2d\u5fc3\u5e76\u518d\u6b21\u53d7\u5230\u4f24\u5bb3\u3002",
            "leveltip": {
                "label": ["\u51b7\u5374\u65f6\u95f4", "\u4f24\u5bb3", "\u79fb\u52a8\u51cf\u901f"],
                "effect": ["18\/17\/16\/15\/14", "", "{{ wslowpercentage*-100.000000 }}% -> {{ wslowpercentagenl*-100.000000 }}%"]
            },
            "resource": "\u65e0\u6d88\u8017"
        }, {
            "id": "AatroxE",
            "name": "\u6697\u5f71\u51b2\u51b3",
            "description": "\u4e9a\u6258\u514b\u65af\u7a81\u8fdb\uff0c\u5e76\u83b7\u5f97\u653b\u51fb\u529b\u3002",
            "image": {
                "full": "AatroxE.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 0,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tooltip": "<spellPassive>\u88ab\u52a8\uff1a<\/spellPassive>\u4e9a\u6258\u514b\u65af\u83b7\u5f97\u6cbb\u7597\u6548\u679c\uff0c\u76f8\u5f53\u4e8e\u4ed6\u9020\u6210\u7684{{ spell.aatroxe:espellvamp }}%\u7269\u7406\u4f24\u5bb3\u3002<br \/><br \/><spellActive>\u4e3b\u52a8\uff1a<\/spellActive>\u4e9a\u6258\u514b\u65af\u7a81\u8fdb\uff0c\u5e76\u83b7\u5f97\u653b\u51fb\u529b\u30022\u5c42\u5145\u80fd\u3002",
            "leveltip": {
                "label": ["\u51b7\u5374\u65f6\u95f4", "\u5145\u80fd\u65f6\u95f4", "\u6cbb\u7597\u6548\u679c\u767e\u5206\u6bd4", "\u989d\u5916\u653b\u51fb\u529b"],
                "effect": ["3\/2.5\/2\/1.5\/1", "", "%", ""]
            },
            "resource": "\u65e0\u6d88\u8017"
        }, {
            "id": "AatroxR",
            "name": "\u5927\u706d",
            "description": "\u4e9a\u6258\u514b\u65af\u73b0\u51fa\u4ed6\u7684\u6076\u9b54\u5f62\u6001\uff0c\u83b7\u5f97\u653b\u51fb\u529b\u548c\u79fb\u52a8\u901f\u5ea6\uff0c\u5e76\u5728\u906d\u53d7\u81f4\u547d\u4f24\u5bb3\u65f6\u4f1a\u590d\u6d3b\uff0c\u540c\u65f6\u56de\u590d\u4e00\u90e8\u5206\u6700\u5927\u751f\u547d\u503c\u3002",
            "image": {
                "full": "AatroxR.png",
                "sprite": "spell0.png",
                "group": "spell",
                "x": 48,
                "y": 96,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u4e9a\u6258\u514b\u65af\u73b0\u51fa\u4ed6\u7684\u6076\u9b54\u5f62\u6001\uff0c\u6301\u7eed{{ spell.aatroxr:rduration }}\u79d2\uff0c\u6050\u60e7\u9644\u8fd1\u7684\u5c0f\u5175\u5e76\u83b7\u5f97\uff1a<span class=\"size4\"><br \/><br \/><\/span>\u5728\u6700\u521d\u76841\u79d2\u3001\u4ee5\u53ca\u8131\u79bb\u4e0e\u82f1\u96c4\u6216\u9632\u5fa1\u5854\u7684\u6218\u6597\u65f6\u7684\u79fb\u52a8\u901f\u5ea6\u63d0\u5347\u3002<span class=\"size4\"><br \/><br \/><\/span>\u653b\u51fb\u529b\u63d0\u5347\u3002<span class=\"size4\"><br \/><br \/><\/span>\u4e00\u53e3\u9c9c\u8840\u9b54\u4e95\u6765\u50a8\u5b58\u751f\u547d\u503c\uff0c\u5e76\u5141\u8bb8\u4ed6\u5728\u627f\u53d7\u81f4\u547d\u4f24\u5bb3\u65f6<a href='Revive'>\u590d\u6d3b<\/a>\u3002",
            "leveltip": {
                "label": ["\u51b7\u5374\u65f6\u95f4", "\u79fb\u52a8\u901f\u5ea6", "\u603b\u653b\u51fb\u529b\u63d0\u5347"],
                "effect": ["140\/130\/120", "", "{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%"]
            },
            "resource": "\u65e0\u6d88\u8017"
        }],
        "passive": {
            "name": "\u8d50\u6b7b\u5251\u6c14",
            "description": "\u4e9a\u6258\u514b\u65af\u7684\u4e0b\u6b21\u653b\u51fb\u9020\u6210\u989d\u5916\u4f24\u5bb3\u5e76\u51cf\u5c11\u76ee\u6807\u8eab\u4e0a\u7684\u6cbb\u7597\u548c\u62a4\u76fe\u6548\u679c\u3002",
            "image": {
                "full": "Aatrox_Passive.AatroxUpdate.png",
                "sprite": "passive0.png",
                "group": "passive",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            }
        },
        "lore": "\u4e9a\u6258\u514b\u65af\u548c\u4ed6\u7684\u540c\u80de\u4eec\u66fe\u662f\u6055\u745e\u739b\u5bf9\u6297\u865a\u7a7a\u4e4b\u5730\u65f6\u6ee1\u8f7d\u8363\u8000\u7684\u5b88\u62a4\u8005\u4e00\u65cf\uff0c\u6700\u7ec8\u5374\u53d8\u6210\u4e86\u7b26\u6587\u4e4b\u5730\u7684\u4e00\u4e2a\u66f4\u5927\u7684\u5a01\u80c1\uff0c\u5e76\u4e14\u4ec5\u88ab\u51fb\u8d25\u4e8e\u88ab\u8be1\u8bc8\u7684\u81f4\u547d\u5deb\u672f\u3002\u4f46\u5728\u88ab\u56da\u7981\u4e86\u6570\u4e2a\u4e16\u7eaa\u540e\uff0c\u4e9a\u6258\u514b\u65af\u7387\u5148\u627e\u5230\u91cd\u83b7\u81ea\u7531\u4e4b\u6cd5\uff0c\u90a3\u5c31\u662f\u5bf9\u90a3\u4e9b\u8822\u5f97\u5984\u56fe\u5c1d\u8bd5\u6325\u821e\u90a3\u628a\u542b\u6709\u4ed6\u7075\u9b42\u7cbe\u534e\u7684\u795e\u5947\u6b66\u5668\u7684\u611a\u5984\u4e4b\u5f92\u8fdb\u884c\u8150\u8680\u548c\u8f6c\u5316\u3002\u73b0\u5728\uff0c\u51ed\u501f\u5077\u6765\u7684\u8840\u8089\u8eaf\u4f53\uff0c\u4ed6\u4ee5\u4e00\u79cd\u8fd1\u4f3c\u4ed6\u4e4b\u524d\u5f62\u6001\u7684\u51f6\u6b8b\u5916\u8868\u884c\u8d70\u4e8e\u7b26\u6587\u4e4b\u5730\u4e2d\uff0c\u5bfb\u6c42\u7740\u4e00\u6b21\u6bc1\u5929\u706d\u5730\u4e14\u4e45\u672a\u5151\u73b0\u7684\u590d\u4ec7\u3002",
        "blurb": "\u4e9a\u6258\u514b\u65af\u548c\u4ed6\u7684\u540c\u80de\u4eec\u66fe\u662f\u6055\u745e\u739b\u5bf9\u6297\u865a\u7a7a\u4e4b\u5730\u65f6\u6ee1\u8f7d\u8363\u8000\u7684\u5b88\u62a4\u8005\u4e00\u65cf\uff0c\u6700\u7ec8\u5374\u53d8\u6210\u4e86\u7b26\u6587\u4e4b\u5730\u7684\u4e00\u4e2a\u66f4\u5927\u7684\u5a01\u80c1\uff0c\u5e76\u4e14\u4ec5\u88ab\u51fb\u8d25\u4e8e\u88ab\u8be1\u8bc8\u7684\u81f4\u547d\u5deb\u672f\u3002\u4f46\u5728\u88ab\u56da\u7981\u4e86\u6570\u4e2a\u4e16\u7eaa\u540e\uff0c\u4e9a\u6258\u514b\u65af\u7387\u5148\u627e\u5230\u91cd\u83b7\u81ea\u7531\u4e4b\u6cd5\uff0c\u90a3\u5c31\u662f\u5bf9\u90a3\u4e9b\u8822\u5f97\u5984\u56fe\u5c1d\u8bd5\u6325\u821e\u90a3\u628a\u542b\u6709\u4ed6\u7075\u9b42\u7cbe\u534e\u7684\u795e\u5947\u6b66\u5668\u7684\u611a\u5984\u4e4b\u5f92\u8fdb\u884c\u8150\u8680\u548c\u8f6c\u5316\u3002\u73b0\u5728\uff0c\u51ed\u501f\u5077\u6765\u7684\u8840\u8089\u8eaf\u4f53\uff0c\u4ed6\u4ee5\u4e00\u79cd\u8fd1\u4f3c\u4ed6\u4e4b\u524d\u5f62\u6001\u7684\u51f6\u6b8b\u5916\u8868\u884c\u8d70\u4e8e\u7b26\u6587\u4e4b\u5730\u4e2d\uff0c\u5bfb\u6c42\u7740\u4e00\u6b21\u6bc1\u5929\u706d\u5730\u4e14\u4e45\u672a\u5151\u73b0\u7684\u590d\u4ec7\u3002",
        "allytips": ["\u5728\u65bd\u653e\u3010\u6697\u88d4\u9b54\u5251\u3011\u65f6\u4f7f\u7528\u3010\u6697\u5f71\u51b2\u51b3\u3011\u53ef\u63d0\u5347\u4f60\u547d\u4e2d\u654c\u4eba\u7684\u51e0\u7387\u3002", "\u8bf8\u5982\u3010\u6076\u706b\u675f\u94fe\u3011\u6216\u4f60\u53cb\u519b\u7684\u5b9a\u8eab\u6548\u679c\u7b49\u63a7\u5236\u6280\u80fd\uff0c\u5c06\u6709\u52a9\u4e8e\u4f60\u3010\u6697\u88d4\u9b54\u5251\u3011\u7684\u8d77\u624b\u3002", "\u5728\u4f60\u786e\u4fdd\u80fd\u591f\u903c\u8feb\u5bf9\u65b9\u4e00\u6218\u65f6\u65bd\u653e\u3010\u5927\u706d\u3011\u3002"],
        "enemytips": ["\u4e9a\u6258\u514b\u65af\u7684\u653b\u51fb\u975e\u5e38\u5177\u6709\u6ce2\u6bb5\u6027\uff0c\u6240\u4ee5\u8981\u5229\u7528\u597d\u65f6\u95f4\u6765\u89c4\u907f\u4ed6\u7684\u547d\u4e2d\u533a\u57df\u3002", "\u4e9a\u6258\u514b\u65af\u7684\u3010\u6076\u706b\u675f\u94fe\u3011\u5728\u671d\u7740\u8fb9\u754c\u6216\u4e9a\u6258\u514b\u65af\u5954\u8dd1\u65f6\u4f1a\u66f4\u5bb9\u6613\u79bb\u5f00\u3002", "\u5728\u4e9a\u6258\u514b\u65af\u4f7f\u7528\u4ed6\u7684\u7ec8\u6781\u6280\u80fd\u65f6\uff0c\u4fdd\u6301\u8ddd\u79bb\u4ee5\u9632\u6b62\u4ed6\u590d\u6d3b\u3002"],
        "blocks": [{
            "map": "12",
            "mode": "ARAM",
            "recommended": [{
                "type": "starting",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1001", "count": 1, "hideCount": false}, {
                    "id": "2051",
                    "count": 1,
                    "hideCount": false
                }, {"id": "2003", "count": 3, "hideCount": false}]
            }, {
                "type": "essential",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3071", "count": 1, "hideCount": false}, {
                    "id": "3111",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3053", "count": 1, "hideCount": false}]
            }, {
                "type": "offensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3812", "count": 1, "hideCount": false}, {
                    "id": "3156",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3161", "count": 1, "hideCount": false}]
            }, {
                "type": "defensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3065", "count": 1, "hideCount": false}, {
                    "id": "3742",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3143", "count": 1, "hideCount": false}]
            }, {
                "type": "consumables",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "2003", "count": 1, "hideCount": false}, {
                    "id": "2140",
                    "count": 1,
                    "hideCount": false
                }]
            }]
        }, {
            "map": "1",
            "mode": "CLASSIC",
            "recommended": [{
                "type": "starting",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "SummonerSmite",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1055", "count": 1, "hideCount": false}, {
                    "id": "2003",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3340", "count": 1, "hideCount": false}]
            }, {
                "type": "startingjungle",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "SummonerSmite",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1039", "count": 1, "hideCount": false}, {
                    "id": "2031",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3340", "count": 1, "hideCount": false}]
            }, {
                "type": "early",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "SummonerSmite",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1001", "count": 1, "hideCount": false}, {
                    "id": "3044",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3067", "count": 1, "hideCount": false}]
            }, {
                "type": "earlyjungle",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "SummonerSmite",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1001", "count": 1, "hideCount": false}, {
                    "id": "3706",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3133", "count": 1, "hideCount": false}]
            }, {
                "type": "essential",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "SummonerSmite",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3047", "count": 1, "hideCount": false}, {
                    "id": "3071",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3812", "count": 1, "hideCount": false}]
            }, {
                "type": "essentialjungle",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "SummonerSmite",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "1400", "count": 1, "hideCount": false}, {
                    "id": "3047",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3071", "count": 1, "hideCount": false}]
            }, {
                "type": "offensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "SummonerSmite",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3053", "count": 1, "hideCount": false}, {
                    "id": "3026",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3748", "count": 1, "hideCount": false}]
            }, {
                "type": "defensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "SummonerSmite",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3065", "count": 1, "hideCount": false}, {
                    "id": "3143",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3156", "count": 1, "hideCount": false}]
            }, {
                "type": "offensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "SummonerSmite",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3053", "count": 1, "hideCount": false}, {
                    "id": "3812",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3026", "count": 1, "hideCount": false}]
            }, {
                "type": "defensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "TeleportCancel",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "3065", "count": 1, "hideCount": false}, {
                    "id": "3742",
                    "count": 1,
                    "hideCount": false
                }, {"id": "3143", "count": 1, "hideCount": false}]
            }, {
                "type": "consumables",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{"id": "2003", "count": 1, "hideCount": true}, {"id": "2140", "count": 1, "hideCount": true}]
            }]
        }]
    }, "version": "8.15.1", "updated": "2018-08-07"
};