# 📂 FREE FIRE INFO API  

## Supported Regions  
```json  
["IND", "BR", "SG", "RU", "ID", "TW", "US", "VN", "TH", "ME", "PK", "CIS", "BD", "NA", "SAC", "EU"]  
```  

## Example API Request  
```plaintext  
https://ffdvinh09-info.vercel.app/player-info?region=SG&uid=338277714  
```  

## Example Response  
```json  
{  
    "basicInfo": {  
        "accountId": "338277714",  
        "accountType": 1,  
        "nickname": "Duy Vinh",  
        "region": "VN",  
        "level": 69,  
        "exp": 2696267,  
        "bannerId": 901000089,  
        "headPic": 902000094,  
        "rank": 323,  
        "rankingPoints": 4703,  
        "badgeCnt": 41,  
        "badgeId": 1001000085,  
        "seasonId": 45,  
        "liked": 43010,  
        "lastLoginAt": "1749865935",  
        "csRank": 317,  
        "csRankingPoints": 69,  
        "weaponSkinShows": [  
            907101304  
        ],  
        "pinId": 910002803,  
        "maxRank": 323,  
        "csMaxRank": 317,  
        "accountPrefers": {  
            "brPregameShowChoices": [  
                1  
            ]  
        },  
        "createAt": "1533628526",  
        "title": 904090026,  
        "externalIconInfo": {  
            "status": "ExternalIconStatus_NOT_IN_USE",  
            "showType": "ExternalIconShowType_FRIEND"  
        },  
        "releaseVersion": "OB49",  
        "showBrRank": true,  
        "showCsRank": true,  
        "socialHighLightsWithBasicInfo": {}  
    },  
    "profileInfo": {  
        "avatarId": 102000004,  
        "skinColor": 33,  
        "clothes": [  
            205049027,  
            214045000,  
            203000485,  
            204000267,  
            211000240  
        ],  
        "equipedSkills": [  
            16,  
            5801,  
            8,  
            1,  
            16,  
            304,  
            8,  
            2,  
            16,  
            2506,  
            8,  
            3,  
            16,  
            5201  
        ],  
        "isSelected": true,  
        "isSelectedAwaken": true  
    },  
    "clanBasicInfo": {  
        "clanId": "3067571084",  
        "clanName": "Rắn Độc fi5",  
        "captainId": "1389031980",  
        "clanLevel": 3,  
        "capacity": 55,  
        "memberNum": 23  
    },  
    "captainBasicInfo": {  
        "accountId": "1389031980",  
        "accountType": 1,  
        "nickname": "Exanimateᴗ",  
        "region": "VN",  
        "level": 81,  
        "exp": 7457894,  
        "bannerId": 901029016,  
        "headPic": 902000022,  
        "rank": 318,  
        "rankingPoints": 3053,  
        "badgeCnt": 62,  
        "badgeId": 1001000085,  
        "seasonId": 45,  
        "liked": 29306,  
        "lastLoginAt": "1749843937",  
        "csRank": 322,  
        "csRankingPoints": 114,  
        "weaponSkinShows": [  
            907192607,  
            912034003  
        ],  
        "pinId": 910002901,  
        "maxRank": 318,  
        "csMaxRank": 322,  
        "accountPrefers": {},  
        "createAt": "1567648917",  
        "title": 904590058,  
        "externalIconInfo": {  
            "status": "ExternalIconStatus_NOT_IN_USE",  
            "showType": "ExternalIconShowType_FRIEND"  
        },  
        "releaseVersion": "OB49",  
        "showBrRank": true,  
        "showCsRank": true,  
        "socialHighLightsWithBasicInfo": {}  
    },  
    "petInfo": {  
        "id": 1300000041,  
        "name": "Duy　Vinh",  
        "level": 7,  
        "exp": 6015,  
        "isSelected": true,  
        "skinId": 1310000044,  
        "selectedSkillId": 1315000012  
    },  
    "socialInfo": {  
        "accountId": "338277714",  
        "language": "Language_VIETNAMESE",  
        "signature": "Mùa hè đã đến k12 có míc",  
        "rankShow": "RankShow_BR"  
    },  
    "diamondCostRes": {  
        "diamondCost": 390  
    },  
    "creditScoreInfo": {  
        "creditScore": 100,  
        "rewardState": "REWARD_STATE_UNCLAIMED",  
        "periodicSummaryEndTime": "1749773520"  
    }  
}  
```  

## Getting Started  

### Clone the Repository  
To clone the repository, run the following command:  
```bash  
git clone https://github.com/duyvinh09/FreeFireInfoSite.git  
```  

### Deploy via Vercel  
You can deploy the project using the link below:  
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/duyvinh09/FreeFireInfoSite)  