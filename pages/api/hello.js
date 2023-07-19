// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "success": true,
      "data": {
        "totalAds": 0,
        "ads": [
          {
            "profile_id": "6071f8c49f7d4a001f4e3a41",
            "category_id": "6071f8c49f7d4a001f4e3a43",
            "ad_type": "6071f8c49f7d4a001f4e3a42",
            "title": "Ad Title",
            "description": "Ad Description",
            "info": [
              "Info 1",
              "Info 2"
            ],
            "price": 100,
            "currency": "IDQ",
            "images": [
              
            ],
            "location": "Ad Location",
            "adStatus": "Active",
            "itemStatus": "NEW",
            "paid": false,
            "phone_number": "1234567890",
            "ad_fields": [
              "6071f8c49f7d4a001f4e3a44"
            ],
            "ownershipStatus": "Owned",
            "createdAt": "2023-05-14T10:30:00Z",
            "updatedAt": "2023-05-14T10:30:00Z"
          }
        ]
      }
    }
  )
}
