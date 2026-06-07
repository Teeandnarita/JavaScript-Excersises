const books = [
    { title: "JS Basics", pages: 200, read: true }, 
    { title: "Node.js", pages: 350, read: false },
    { title: "Function.js", pages: 300, read: true },
    { title: "Loop.js", pages: 300, read: false },
    { title: "Variable.js", pages: 350, read: false },
    { title: "JS Basics 2", pages: 300, read: true },
    { title: "Math.js", pages: 350, read: true },
    { title: "Numbers.js", pages: 350, read: false },
    { title: "List.js", pages: 350, read: true },
    { title: "Array.js", pages: 400, read: true }
];

books.push({ title: "JS Hard", pages: 300, read: false })
books.splice(1,1)

totalPages = 0
books.map((item)=>{
    totalPages += item.pages
})
console.log(totalPages)

maxPage = 0
maxBookName = 0
books.map((item)=>{
    if(maxPage < item.pages){
        maxPage = item.pages
        maxBookName = item.title
    }
})
console.log(maxBookName)

books.sort((a, b) => a.pages - b.pages)

console.log(books)
