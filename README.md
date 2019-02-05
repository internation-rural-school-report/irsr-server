# irsr-server

## **BASE URL**

**https://irsr.herokuapp.com**

## **PUBLIC ROUTES**

### Schools

#### **GET /api/schools**: fetches all schools' public information

Responses:
- 200 (OK)
```
[
  {
    id: 1,
    school: "Hope for Education Elementary",
    level: "Elementary School",
    country: "Ghana"
  },
  {
    id: 2,
    school: "Rekindled Middle School",
    level: "Middle School",
    country: "Ghana"
  }
]
```
- 500 (Internal Server Error)

#### **GET /api/schools/:id**: fetches a school information

Responses: 
- 200 (OK)
```
{
    "id": 1,
    "school": "Hope for Education Elementary",
    "level": "Elementary School",
    "country": "Ghana",
    "admins": [
        {
            "firstname": "Michael",
            "lastname": "Mbah"
        },
        {
            "firstname": "Jenny",
            "lastname": "Nykita"
        }
    ],
    "boards": [
        {
            "firstname": "Ben",
            "lastname": "Bob"
        },
        {
            "firstname": "Abcde",
            "lastname": "Bcde"
        },
        {
            "firstname": "George",
            "lastname": "Tkid"
        }
    ]
}
```
- 500 (Internal Server Error)
