// Tạo 1 class 
var Student = Backbone.Model.extend({
    name:'',
    diemToan:0,
    diemLy:0,
    diemHoa:0,
    tinhDiemTrungBinh:function(){
        var dtb = (Number(this.get('diemToan')) + Number(this.get('diemLy')) + Number(this.get('diemHoa')))/3;            
            return dtb;
    },
    initialize :function()
    {
        console.log("hehe");
    }
    
})

// Tạo các đối tượng (Model) học sinh cụ thể
var student1 = new Student();
student1.set({name:"Le Viet Tho", diemToan:9, diemLy:7, diemHoa:8});
var student2 = new Student({name:"Nguyen Hai Van", diemToan:6, diemLy:7, diemHoa:9});
var student3 = new Student({name:"Le Viet Duc",diemToan:5, diemLy:5, diemHoa:10});
var student4 = new Student({name:"Dang Van Tuan", diemToan:3, diemLy:10, diemHoa:6});
var student5 = new Student({name:"Nguyen Van Quan", diemToan:8, diemLy:8, diemHoa:8});
var student6 = new Student({name:"Nguyen Thi Hien", diemToan:1, diemLy:2, diemHoa:3});

// Lấy ra thông tin
console.log("Thông tin nhập vào: student1: " +JSON.stringify(student1));
console.log("Thông tin nhập vào: student2: " +JSON.stringify(student2));
console.log("Thông tin nhập vào: student3: " +JSON.stringify(student3));
console.log("Thông tin nhập vào: student4: " +JSON.stringify(student4));
console.log("Thông tin nhập vào: student5: " +JSON.stringify(student5));
console.log("Thông tin nhập vào: student6: " +JSON.stringify(student6));
console.log("-----------------------------------------------------------------------------");
console.log("MODELS----------------------------------------------------------------------");
console.log("student1 có điểm Toán là: "+ student1.get('diemToan'));
console.log("student2 có điểm Lý là: "+ student2.get('diemLy'));
console.log("student2 có điểm trung bình là: "+ student2.tinhDiemTrungBinh());
console.log("student6 có tên là: "+ student6.get('name'));


//COLLECTIONS
console.log("COLLECTIONS------------------------------------------------------------------");
var Students = Backbone.Collection.extend({
    model : Student
});
var students = new Students([student1,student2,student3]);
console.log("Danh sách tất cả các học sinh:------------------------------------------------");
console.log("Trên 1 dòng:----------------------------------");
console.log(JSON.stringify(students));
console.log("Trên nhiều dòng:------------------------------");
students.each(function(item,index){
    console.log("Student[" + index + "]: " + JSON.stringify(item));
})
console.log("Tổng số lượng học sinh là: ");
console.log(students.length);
console.log("Học sinh có điểm Hóa = 8 là:")
var studentHoa8 = students.find( function(item)
{
    return item.get('diemHoa') === 8;
});
console.log(JSON.stringify(studentHoa8));


console.log("Sắp xếp học sinh theo thứ tự điểm Toán tăng dần:   ")
students.comparator = function(item) {
    return item.get("diemToan");
};
students.sort();
students.each(function(item,index){
    console.log("Student[" + index + "]: " + JSON.stringify(item));
})


