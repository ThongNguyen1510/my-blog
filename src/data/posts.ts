export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'java' | 'javascript';
  date: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: "java-oop-basics",
    title: "Lập trình hướng đối tượng trong Java",
    excerpt: "Tìm hiểu các khái niệm cơ bản về OOP: Class, Object, Inheritance, Polymorphism, Encapsulation và Abstraction.",
    content: `
# Lập trình hướng đối tượng trong Java

Lập trình hướng đối tượng (OOP) là một mô hình lập trình dựa trên khái niệm "đối tượng". Java là ngôn ngữ lập trình hướng đối tượng thuần túy.

## 4 Tính chất của OOP

### 1. Tính đóng gói (Encapsulation)
Đóng gói dữ liệu và phương thức vào trong một class, ẩn đi các chi tiết triển khai.

\`\`\`java
public class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}
\`\`\`

### 2. Tính kế thừa (Inheritance)
Cho phép class con kế thừa thuộc tính và phương thức từ class cha.

### 3. Tính đa hình (Polymorphism)
Một phương thức có thể có nhiều hình thức khác nhau.

### 4. Tính trừu tượng (Abstraction)
Ẩn đi các chi tiết phức tạp, chỉ hiển thị những gì cần thiết.
    `,
    category: "java",
    date: "2024-01-15",
    readTime: "5 phút"
  },
  {
    id: "java-collections",
    title: "Java Collections Framework",
    excerpt: "Hướng dẫn sử dụng ArrayList, HashMap, LinkedList và các cấu trúc dữ liệu phổ biến trong Java.",
    content: `
# Java Collections Framework

Collections Framework cung cấp kiến trúc để lưu trữ và thao tác với nhóm đối tượng.

## Các Interface chính

- **List**: Danh sách có thứ tự, cho phép trùng lặp
- **Set**: Tập hợp không có thứ tự, không cho phép trùng lặp
- **Map**: Cặp key-value

## Ví dụ với ArrayList

\`\`\`java
import java.util.ArrayList;

ArrayList<String> languages = new ArrayList<>();
languages.add("Java");
languages.add("JavaScript");
languages.add("Python");

for (String lang : languages) {
    System.out.println(lang);
}
\`\`\`
    `,
    category: "java",
    date: "2024-01-20",
    readTime: "7 phút"
  },
  {
    id: "java-networking",
    title: "Lập trình mạng với Java Socket",
    excerpt: "Xây dựng ứng dụng client-server đơn giản sử dụng Java Socket API.",
    content: `
# Lập trình mạng với Java Socket

Socket là endpoint của một kết nối hai chiều giữa hai chương trình chạy trên mạng.

## Server Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server đang chờ kết nối...");
        
        Socket clientSocket = serverSocket.accept();
        System.out.println("Client đã kết nối!");
        
        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
        out.println("Xin chào từ Server!");
        
        serverSocket.close();
    }
}
\`\`\`

## Client Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class SimpleClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream()));
        
        System.out.println(in.readLine());
        socket.close();
    }
}
\`\`\`
    `,
    category: "java",
    date: "2024-02-01",
    readTime: "10 phút"
  },
  {
    id: "java-multithreading",
    title: "Đa luồng trong Java",
    excerpt: "Tìm hiểu cách tạo và quản lý thread, synchronized và concurrent utilities.",
    content: `
# Đa luồng trong Java

Multithreading cho phép chương trình thực hiện nhiều tác vụ đồng thời.

## Tạo Thread

### Cách 1: Extends Thread

\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread đang chạy: " + Thread.currentThread().getName());
    }
}
\`\`\`

### Cách 2: Implements Runnable

\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable đang chạy!");
    }
}

Thread thread = new Thread(new MyRunnable());
thread.start();
\`\`\`

## Synchronized

\`\`\`java
public synchronized void increment() {
    count++;
}
\`\`\`
    `,
    category: "java",
    date: "2024-02-10",
    readTime: "8 phút"
  },
  {
    id: "js-async-await",
    title: "Async/Await trong JavaScript",
    excerpt: "Cách sử dụng async/await để xử lý bất đồng bộ một cách dễ đọc và hiệu quả.",
    content: `
# Async/Await trong JavaScript

Async/await là cú pháp hiện đại để làm việc với Promise, giúp code bất đồng bộ trông giống như code đồng bộ.

## Cú pháp cơ bản

\`\`\`javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Lỗi:', error);
    }
}
\`\`\`

## Promise vs Async/Await

\`\`\`javascript
// Promise
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function getData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
}
\`\`\`
    `,
    category: "javascript",
    date: "2024-02-15",
    readTime: "6 phút"
  },
  {
    id: "js-dom-manipulation",
    title: "Thao tác DOM với JavaScript",
    excerpt: "Hướng dẫn chi tiết về cách truy xuất và thay đổi các phần tử HTML bằng JavaScript.",
    content: `
# Thao tác DOM với JavaScript

DOM (Document Object Model) là giao diện lập trình cho các tài liệu HTML.

## Truy xuất phần tử

\`\`\`javascript
// Theo ID
const header = document.getElementById('header');

// Theo class
const items = document.getElementsByClassName('item');

// Query Selector
const button = document.querySelector('.btn-primary');
const allButtons = document.querySelectorAll('button');
\`\`\`

## Thay đổi nội dung

\`\`\`javascript
// Thay đổi text
element.textContent = 'Nội dung mới';

// Thay đổi HTML
element.innerHTML = '<strong>HTML mới</strong>';

// Thay đổi style
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
\`\`\`

## Thêm sự kiện

\`\`\`javascript
button.addEventListener('click', function(event) {
    alert('Button đã được click!');
});
\`\`\`
    `,
    category: "javascript",
    date: "2024-02-20",
    readTime: "7 phút"
  },
  {
    id: "js-fetch-api",
    title: "Fetch API và HTTP Requests",
    excerpt: "Sử dụng Fetch API để gọi REST API và xử lý dữ liệu từ server.",
    content: `
# Fetch API và HTTP Requests

Fetch API cung cấp interface để fetch resources qua mạng.

## GET Request

\`\`\`javascript
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    const users = await response.json();
    return users;
}
\`\`\`

## POST Request

\`\`\`javascript
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    
    return response.json();
}
\`\`\`

## Xử lý lỗi

\`\`\`javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}
\`\`\`
    `,
    category: "javascript",
    date: "2024-03-01",
    readTime: "8 phút"
  },
  {
    id: "js-es6-features",
    title: "Tính năng ES6+ cần biết",
    excerpt: "Arrow functions, destructuring, spread operator, template literals và các tính năng JavaScript hiện đại.",
    content: `
# Tính năng ES6+ cần biết

ECMAScript 6 (ES6) mang đến nhiều tính năng mạnh mẽ cho JavaScript.

## Arrow Functions

\`\`\`javascript
// Trước ES6
const add = function(a, b) {
    return a + b;
};

// ES6+
const add = (a, b) => a + b;
\`\`\`

## Destructuring

\`\`\`javascript
// Object destructuring
const { name, age } = user;

// Array destructuring
const [first, second, ...rest] = numbers;
\`\`\`

## Template Literals

\`\`\`javascript
const greeting = \`Xin chào \${name}!
Hôm nay là \${new Date().toLocaleDateString()}\`;
\`\`\`

## Spread Operator

\`\`\`javascript
const newArray = [...array1, ...array2];
const newObject = { ...obj1, ...obj2 };
\`\`\`
    `,
    category: "javascript",
    date: "2024-03-05",
    readTime: "6 phút"
  },
  {
    id: "js-nodejs-basics",
    title: "Giới thiệu Node.js cho lập trình mạng",
    excerpt: "Cơ bản về Node.js và cách xây dựng HTTP server đơn giản.",
    content: `
# Giới thiệu Node.js cho lập trình mạng

Node.js cho phép chạy JavaScript ở phía server, rất phù hợp cho các ứng dụng mạng.

## HTTP Server đơn giản

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Xin chào từ Node.js Server!');
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
\`\`\`

## Express.js Framework

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId: userId });
});

app.listen(3000);
\`\`\`

## WebSocket với Socket.io

\`\`\`javascript
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('User connected');
    
    socket.on('message', (data) => {
        io.emit('message', data);
    });
});
\`\`\`
    `,
    category: "javascript",
    date: "2024-03-10",
    readTime: "9 phút"
  }
];

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostsByCategory = (category: 'java' | 'javascript'): Post[] => {
  return posts.filter(post => post.category === category);
};
