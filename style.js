var myApp = angular.module("myModule",[]);
myApp.controller("myController",function($scope){
    $scope.message="Anguar JS tutorial";

    var employee = {
        firstname:"Collins",
        lastname:"Kiplagat",
        gender:"Male"
    }
    $scope.employee=employee;
    var country={
        name:"Kenya",
        capital:"Nairobi",
        flag:"download.png"
    }
$scope.country=country;

var farmer ={
    name:"Collins",
    username:"coki",
    age:"23"
}
$scope.farmer=farmer;

var employees=[
    {firstname:"Collins",lastname:"Kiplagat",age:23,salary:125000},
    {firstname:"Evans",lastname:"Omondi",age:22,salary:120000},
    {firstname:"Mavin",lastname:"Otieno",age:22,salary:150000},
    {firstname:"Shadrack",lastname:"Mwangi",age:22,salary:140000}
];
$scope.employees=employees;
});
