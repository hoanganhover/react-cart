var initialState = [
    {
        id :1,
        name : 'Iphone 7 plus',
        image : 'https://hoanghamobile.com/Uploads/Originals/2016/09/08/201609081107459292_rose.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        description : 'Apple',
        price :500,
        inventory : 10,
        rating:3
    },
    {
        id :2,
        name : 'SamSung Note 9',
        image : 'https://hoanghamobile.com/Uploads/Originals/2019/02/22/201902221058534326_S10-plus-5.png;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        description : 'Samsung',
        price :700,
        inventory : 50,
        rating:4
    },
    {
        id :3,
        name : 'Iphone X',
        image : 'https://hoanghamobile.com/Uploads/Originals/2018/09/13/201809130941524674_iPhone-XS%20(3).png;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        description : 'Apple',
        price :300,
        inventory : 5,
        rating:5
    }
];

const product = (state = initialState, action) =>{
    switch(action.type){
        default : return [...state];
    }
}

export default product;