
//в ts якщо ми визначили конекретні дані то тільки їх можна вносити number-number string-string boolean-booleancdd

// function foo(a: number, x?:string): string{
//  return a + '';
// }
//
// foo(2323, 'rerere');
// foo(123);
//
// function bar(obj:{id:number, name: string;}):void{
//
// }
// bar({id:3, name:'Kira'});
//
// //так вказуєтьс тип даних які будуть
// let num: number =100;
// let s:string = 'asdsdf';
// let b: boolean = false;
// let obj: {id:number,status:boolean, dsd?:string} = {id:3,status:false};
// let arrS: string[] = ['wrwrw','r3r4r','r34r3r'];
// let arrN: number[] = [3323,434,545,545];
// let arrN2: Array<number> = [3232,545,65,65]; //тип generic таким чином можна визначити тип ланих також
// let arrObj: {name:string,age:number}[] = [{name:'gosha',age:34},]
//
//
//
// function divCreator(content:string,elementWhereAdd:HTMLElement){
//
// }
// divCreator('dfdfd',document.body);
//
// function fetchData(): Promise<{id:number,userid:number,title:string}[]> {
//
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//         .then((value:{id:number,userid:number,title:string}[]) => {
//             return value;
//         });
// }


//classes

// class User {
//     private _id: number;
//     name: string;
//     status: boolean;
//
//
//     constructor(id: number, name: string, status: boolean) {
//         this._id = id;
//         this.name = name;
//         this.status = status;
//     }
//
//
//     greeting(): void {
//         console.log('hello')
//     }
//
//
//     get id(): number {
//         return this._id;
//
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
// }
// let obj: {id:2,name:'cho',status:true};
//
// let obj: User = {
//     id: 1,
//     name: 'cho',
//     status: true,
//     greeting():void {
//         console.log('lolo')
//     }
// };
//
// let user = new User(2,'koko',true);



//скорочена конструкція

// class User {
//     constructor(private id:number,public name:string,public status:boolean) {
//     }
// }
//
// let user1 = new User (2,'Gho',false);
// let user = new  User (3,'Khloe',true)
// console.log(user,user1);
//
//
// //наслідування
// // за дпомогою extends взяли те саме що було у User
//
// class Customer extends User{
//
//     constructor(id: number, name: string, status: boolean,public login: string,public password: number) {
//         super(id, name, status);
//     }
// }
//
// let customer = new Customer(4,'Gora',false,'Kosa',4434)
// console.log(customer);
//
// //фіча наслідування
//
// function foobar(user:User) {
//
//     if(user instanceof User){  //можна зробити перевірку чи існуються ті чи інші дані
//         console.log(user.name, user.status)
//     }
//        if(user instanceof Customer){
//     let customer = user as Customer
//     console.log(customer.name, customer.status,customer.login,customer.password)
// }
// }
// //Виклик функц foobar
//
// foobar(user);
// foobar(customer);




// const asd = (names: string[], house:number, flat:number):number[] =>{
//     console.log(names[0]);
//     return
// }
//
// asd(['name', 'Max'],25,34)
// asd(['name', 'Oleh'],25,35)
// asd(['name', 'Sven'],25,36)
//
// interface IUser<T>{
//     name: string,
//     age: number,
//     house: number
//     data:T
//
// }
// // const user:IUser = {name: 'Max', age:34, house:25}
// // const user:IUser<number[]> = {age:34, name:'Gena',house:45,data:[1,2,34,]}
// const user:IUser<string> = {age:34, name:'Gena',house:45,data:'kololo'}
//
// console.log(user);




// class User{
//     constructor(name:string,id:number,status:boolean) {
//     }
// }
//
// let user = new User('Sonya',2,true);


// Parameters Genericks


// class User<ID>{
//   constructor(private id:ID,private name:string) {
//   }
//
// }
//
// let user = new User<number>(2,'sfrwer');
// let user2 = new User<string>('cwfjwejw','qdwdqw');


//  abstract class Animal {
//
//         constructor(private legs: number, nose:boolean) {
//         }
//
//        public abstract sounds():void;
//
//
// }
//
// class Dog extends Animal{
//     sounds():void {
//         console.log('gav-gav-gav')
//
//     }
// }
//
// let dog = new  Dog(4,true);
//
//
// class Cat extends Animal{
//     sounds():void {
//         console.log('meow,meow')
//
//     }
// }
//
// let cat = new Cat(4,true);
//
// function foobar(animal:Animal) {
//
//     animal.sounds();
// }
//
// foobar(dog);
// foobar(cat);


// interface IUser {
//     name:string;
//     age:number;
//
//
//     greeting():void;
// }
//
// function foosar(user:IUser) {
//
//     user.greeting();
// }
//
// foosar({name:'huka',age:23,greeting():void {
//
//     console.log(`hello motherfuckers ${this.name}`)
//     }})
//
// foosar({
//     name:'hruka',
//     age:3434,
//     greeting():void {
//         console.log('hohoho')
//     }
// })
