// const person = {name: 'jack william', age: 17, job: 'facebook', gfName: 'Ema watson', address: 'kochuKhet', phone: '017165483734', friends: ['tom hanks', 'tom cruise', 'tony stark']}

// const { phone, gfName, address, salary } = person;
// console.log(gfName, phone, salary);

// const friends = ['sakib khan', 'arman khan', 'akib khan', 'aamir khan', 'belal khan']
// const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(restFriends)

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger Leader'
    }
}
const {leader} = { address: 'kola bagan', leader: 'Tiger Leader'}