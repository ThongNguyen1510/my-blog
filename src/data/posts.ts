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

Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một mô hình lập trình dựa trên khái niệm "đối tượng". Java là một trong những ngôn ngữ lập trình hướng đối tượng thuần túy và phổ biến nhất trên thế giới. Trong bài viết này, chúng ta sẽ tìm hiểu chi tiết về 4 tính chất quan trọng của OOP.

## Tại sao cần OOP?

Trước khi OOP ra đời, lập trình thủ tục (procedural programming) là phương pháp chủ đạo. Tuy nhiên, khi các chương trình ngày càng phức tạp, việc quản lý code trở nên khó khăn. OOP giải quyết vấn đề này bằng cách:

- **Tổ chức code tốt hơn**: Nhóm dữ liệu và hành vi liên quan vào một đơn vị (class)
- **Tái sử dụng code**: Thông qua kế thừa và đa hình
- **Bảo mật dữ liệu**: Thông qua tính đóng gói
- **Dễ bảo trì**: Mỗi class là một module độc lập

## 4 Tính chất của OOP

### 1. Tính đóng gói (Encapsulation)

Đóng gói là quá trình ẩn đi các chi tiết triển khai bên trong và chỉ cung cấp interface công khai để tương tác. Trong Java, chúng ta sử dụng các access modifier để kiểm soát quyền truy cập.

**Các Access Modifier trong Java:**
- \`private\`: Chỉ truy cập được trong cùng class
- \`default\` (không khai báo): Truy cập được trong cùng package
- \`protected\`: Truy cập được trong cùng package và các class con
- \`public\`: Truy cập được từ mọi nơi

\`\`\`java
public class BankAccount {
    // Thuộc tính private - không thể truy cập trực tiếp từ bên ngoài
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Constructor
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    // Getter - cung cấp quyền đọc có kiểm soát
    public double getBalance() {
        return balance;
    }
    
    public String getOwnerName() {
        return ownerName;
    }
    
    // Setter với validation
    public void setOwnerName(String ownerName) {
        if (ownerName != null && !ownerName.trim().isEmpty()) {
            this.ownerName = ownerName;
        }
    }
    
    // Methods với logic nghiệp vụ
    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Nạp tiền thành công: " + amount);
            return true;
        }
        System.out.println("Số tiền không hợp lệ!");
        return false;
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Rút tiền thành công: " + amount);
            return true;
        }
        System.out.println("Không thể rút tiền!");
        return false;
    }
}
\`\`\`

### 2. Tính kế thừa (Inheritance)

Kế thừa cho phép một class (class con) thừa hưởng các thuộc tính và phương thức từ một class khác (class cha). Điều này giúp tái sử dụng code và tạo mối quan hệ "is-a" giữa các class.

\`\`\`java
// Class cha (Superclass)
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " đang ăn.");
    }
    
    public void sleep() {
        System.out.println(name + " đang ngủ.");
    }
    
    public void displayInfo() {
        System.out.println("Tên: " + name + ", Tuổi: " + age);
    }
}

// Class con (Subclass)
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Gọi constructor của class cha
        this.breed = breed;
    }
    
    // Phương thức riêng của Dog
    public void bark() {
        System.out.println(name + " đang sủa: Gâu gâu!");
    }
    
    public void fetch() {
        System.out.println(name + " đang nhặt bóng.");
    }
    
    // Override phương thức của class cha
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Giống: " + breed);
    }
}

// Class con khác
public class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    public void meow() {
        System.out.println(name + " đang kêu: Meo meo!");
    }
    
    public void scratch() {
        System.out.println(name + " đang cào.");
    }
}
\`\`\`

### 3. Tính đa hình (Polymorphism)

Đa hình cho phép một phương thức có thể có nhiều hình thức khác nhau. Có hai loại đa hình trong Java:

**a) Compile-time Polymorphism (Method Overloading):**

\`\`\`java
public class Calculator {
    // Cùng tên phương thức nhưng khác tham số
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}
\`\`\`

**b) Runtime Polymorphism (Method Overriding):**

\`\`\`java
public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Phương thức abstract - bắt buộc class con phải override
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
    
    public void displayColor() {
        System.out.println("Màu: " + color);
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (width + height);
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

// Sử dụng đa hình
public class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        shapes[0] = new Rectangle("Đỏ", 5, 3);
        shapes[1] = new Circle("Xanh", 4);
        shapes[2] = new Rectangle("Vàng", 6, 2);
        
        for (Shape shape : shapes) {
            System.out.println("Diện tích: " + shape.calculateArea());
            System.out.println("Chu vi: " + shape.calculatePerimeter());
            shape.displayColor();
            System.out.println("---");
        }
    }
}
\`\`\`

### 4. Tính trừu tượng (Abstraction)

Trừu tượng là quá trình ẩn đi các chi tiết triển khai phức tạp và chỉ hiển thị các tính năng cần thiết. Java hỗ trợ trừu tượng thông qua abstract class và interface.

\`\`\`java
// Interface định nghĩa "hợp đồng"
public interface Drawable {
    void draw();
    void resize(double factor);
}

public interface Movable {
    void moveUp(int distance);
    void moveDown(int distance);
    void moveLeft(int distance);
    void moveRight(int distance);
}

// Abstract class với một số phương thức đã triển khai
public abstract class GameCharacter implements Drawable, Movable {
    protected int x, y;
    protected int health;
    protected String name;
    
    public GameCharacter(String name, int x, int y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.health = 100;
    }
    
    // Phương thức đã triển khai
    @Override
    public void moveUp(int distance) {
        y -= distance;
    }
    
    @Override
    public void moveDown(int distance) {
        y += distance;
    }
    
    @Override
    public void moveLeft(int distance) {
        x -= distance;
    }
    
    @Override
    public void moveRight(int distance) {
        x += distance;
    }
    
    // Phương thức abstract - mỗi loại nhân vật sẽ có cách tấn công khác nhau
    public abstract void attack();
    public abstract void specialAbility();
}

// Triển khai cụ thể
public class Warrior extends GameCharacter {
    private int strength;
    
    public Warrior(String name, int x, int y) {
        super(name, x, y);
        this.strength = 50;
    }
    
    @Override
    public void draw() {
        System.out.println("Vẽ chiến binh " + name + " tại (" + x + ", " + y + ")");
    }
    
    @Override
    public void resize(double factor) {
        System.out.println("Thay đổi kích thước chiến binh với hệ số " + factor);
    }
    
    @Override
    public void attack() {
        System.out.println(name + " tấn công bằng kiếm! Sát thương: " + strength);
    }
    
    @Override
    public void specialAbility() {
        System.out.println(name + " sử dụng Cuồng nộ chiến binh!");
    }
}
\`\`\`

## Kết luận

OOP là nền tảng quan trọng trong lập trình Java. Việc nắm vững 4 tính chất này sẽ giúp bạn viết code có cấu trúc tốt, dễ bảo trì và mở rộng. Hãy thực hành nhiều để hiểu sâu hơn về các khái niệm này!
    `,
    category: "java",
    date: "2024-01-15",
    readTime: "15 phút"
  },
  {
    id: "java-collections",
    title: "Java Collections Framework",
    excerpt: "Hướng dẫn sử dụng ArrayList, HashMap, LinkedList và các cấu trúc dữ liệu phổ biến trong Java.",
    content: `
# Java Collections Framework

Java Collections Framework là một kiến trúc thống nhất để biểu diễn và thao tác với các tập hợp (collections). Nó cung cấp các interface, implementation và algorithms để làm việc với nhóm các đối tượng một cách hiệu quả.

## Tổng quan về Collections Framework

### Tại sao cần Collections Framework?

Trước Java 2, chúng ta chỉ có các cấu trúc dữ liệu cơ bản như Array, Vector và Hashtable. Những cấu trúc này có nhiều hạn chế:
- Không có interface chung
- Khó mở rộng và tùy chỉnh
- Hiệu năng không tối ưu trong nhiều trường hợp

Collections Framework giải quyết những vấn đề này bằng cách cung cấp:
- Các interface chuẩn hóa
- Nhiều implementation với đặc điểm khác nhau
- Algorithms sẵn có (sorting, searching, ...)
- Hỗ trợ generics từ Java 5

### Hierarchy của Collections Framework

\`\`\`
                    Iterable
                        |
                    Collection
                   /    |    \\
                List   Set   Queue
                 |      |      |
           ArrayList  HashSet  PriorityQueue
           LinkedList TreeSet  ArrayDeque
           Vector     LinkedHashSet
           
                      Map
                       |
            HashMap  TreeMap  LinkedHashMap
\`\`\`

## Các Interface chính

### 1. List Interface

List là collection có thứ tự (ordered), cho phép phần tử trùng lặp. Các implementation phổ biến:

#### ArrayList

\`\`\`java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        // Khởi tạo ArrayList
        List<String> languages = new ArrayList<>();
        
        // Thêm phần tử
        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");
        languages.add("C++");
        languages.add("Go");
        
        // Thêm phần tử tại vị trí cụ thể
        languages.add(2, "TypeScript");
        
        // Truy cập phần tử
        System.out.println("Phần tử đầu tiên: " + languages.get(0));
        System.out.println("Kích thước: " + languages.size());
        
        // Kiểm tra tồn tại
        if (languages.contains("Java")) {
            System.out.println("Java có trong danh sách!");
        }
        
        // Duyệt qua ArrayList
        System.out.println("\\n--- Duyệt bằng for-each ---");
        for (String lang : languages) {
            System.out.println(lang);
        }
        
        // Duyệt bằng Stream API (Java 8+)
        System.out.println("\\n--- Duyệt bằng Stream ---");
        languages.stream()
                 .filter(lang -> lang.startsWith("J"))
                 .forEach(System.out::println);
        
        // Sắp xếp
        Collections.sort(languages);
        System.out.println("\\n--- Sau khi sắp xếp ---");
        System.out.println(languages);
        
        // Xóa phần tử
        languages.remove("C++");
        languages.remove(0); // Xóa theo index
        
        // Chuyển thành array
        String[] array = languages.toArray(new String[0]);
        
        // Xóa tất cả
        languages.clear();
        System.out.println("Sau khi clear: " + languages.isEmpty());
    }
}
\`\`\`

#### LinkedList

LinkedList triển khai cả List và Deque interface, phù hợp khi cần thêm/xóa phần tử ở đầu/cuối thường xuyên.

\`\`\`java
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> tasks = new LinkedList<>();
        
        // Thêm phần tử
        tasks.add("Task 1");
        tasks.addFirst("Urgent Task"); // Thêm vào đầu
        tasks.addLast("Final Task");   // Thêm vào cuối
        
        // Lấy phần tử đầu/cuối
        System.out.println("Đầu tiên: " + tasks.getFirst());
        System.out.println("Cuối cùng: " + tasks.getLast());
        
        // Sử dụng như Stack (LIFO)
        tasks.push("New Urgent");       // Thêm vào đầu
        String popped = tasks.pop();    // Lấy và xóa từ đầu
        
        // Sử dụng như Queue (FIFO)
        tasks.offer("Queued Task");     // Thêm vào cuối
        String polled = tasks.poll();   // Lấy và xóa từ đầu
        
        // Peek - xem mà không xóa
        String first = tasks.peek();
        String last = tasks.peekLast();
        
        System.out.println("\\nDanh sách tasks:");
        for (String task : tasks) {
            System.out.println("- " + task);
        }
    }
}
\`\`\`

### 2. Set Interface

Set là collection không cho phép phần tử trùng lặp.

#### HashSet

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> uniqueWords = new HashSet<>();
        
        // Thêm phần tử
        uniqueWords.add("apple");
        uniqueWords.add("banana");
        uniqueWords.add("apple");  // Không được thêm vì đã tồn tại
        uniqueWords.add("cherry");
        
        System.out.println("Số phần tử: " + uniqueWords.size()); // 3
        
        // Các phép toán tập hợp
        Set<String> set1 = new HashSet<>();
        set1.add("A");
        set1.add("B");
        set1.add("C");
        
        Set<String> set2 = new HashSet<>();
        set2.add("B");
        set2.add("C");
        set2.add("D");
        
        // Union (hợp)
        Set<String> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union); // [A, B, C, D]
        
        // Intersection (giao)
        Set<String> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection); // [B, C]
        
        // Difference (hiệu)
        Set<String> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference: " + difference); // [A]
    }
}
\`\`\`

#### TreeSet

TreeSet duy trì thứ tự sắp xếp của các phần tử.

\`\`\`java
import java.util.TreeSet;
import java.util.Comparator;

public class TreeSetExample {
    public static void main(String[] args) {
        // TreeSet với thứ tự tự nhiên
        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(9);
        
        System.out.println("Sorted: " + numbers); // [1, 2, 5, 8, 9]
        
        // Các phương thức đặc biệt của TreeSet
        System.out.println("First: " + numbers.first());     // 1
        System.out.println("Last: " + numbers.last());       // 9
        System.out.println("Lower than 5: " + numbers.lower(5));   // 2
        System.out.println("Higher than 5: " + numbers.higher(5)); // 8
        
        // Subset
        System.out.println("SubSet(2, 8): " + numbers.subSet(2, 8)); // [2, 5]
        System.out.println("HeadSet(5): " + numbers.headSet(5));     // [1, 2]
        System.out.println("TailSet(5): " + numbers.tailSet(5));     // [5, 8, 9]
        
        // TreeSet với Comparator tùy chỉnh
        TreeSet<String> names = new TreeSet<>(Comparator.reverseOrder());
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        System.out.println("Reverse order: " + names); // [Charlie, Bob, Alice]
    }
}
\`\`\`

### 3. Map Interface

Map lưu trữ các cặp key-value, mỗi key là duy nhất.

#### HashMap

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        
        // Thêm phần tử
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);
        scores.put("Diana", 88);
        
        // Truy cập giá trị
        System.out.println("Điểm của Alice: " + scores.get("Alice"));
        
        // Kiểm tra key/value tồn tại
        if (scores.containsKey("Bob")) {
            System.out.println("Bob có trong danh sách");
        }
        
        // getOrDefault - trả về giá trị mặc định nếu key không tồn tại
        int score = scores.getOrDefault("Unknown", 0);
        System.out.println("Điểm của Unknown: " + score);
        
        // putIfAbsent - chỉ thêm nếu key chưa tồn tại
        scores.putIfAbsent("Alice", 100); // Không thay đổi vì Alice đã có
        
        // Duyệt qua Map
        System.out.println("\\n--- Duyệt Map ---");
        
        // Cách 1: Duyệt qua entrySet
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Cách 2: Duyệt qua keys
        for (String name : scores.keySet()) {
            System.out.println(name + " -> " + scores.get(name));
        }
        
        // Cách 3: forEach với lambda (Java 8+)
        scores.forEach((name, s) -> {
            System.out.println(name + " scored " + s);
        });
        
        // compute - tính toán và cập nhật giá trị
        scores.compute("Alice", (key, val) -> val + 5); // Alice += 5
        
        // merge - gộp giá trị
        scores.merge("Eve", 90, Integer::sum); // Thêm Eve với điểm 90
        scores.merge("Alice", 5, Integer::sum); // Alice += 5
        
        System.out.println("\\nSau khi cập nhật: " + scores);
    }
}
\`\`\`

### 4. Queue Interface

Queue thường được sử dụng để lưu trữ các phần tử theo thứ tự FIFO (First-In-First-Out).

\`\`\`java
import java.util.PriorityQueue;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Deque;

public class QueueExample {
    public static void main(String[] args) {
        // PriorityQueue - hàng đợi ưu tiên
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(5);
        pq.offer(1);
        pq.offer(3);
        pq.offer(2);
        
        System.out.println("PriorityQueue (min-heap):");
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // 1, 2, 3, 5
        }
        
        // PriorityQueue với Comparator (max-heap)
        PriorityQueue<Integer> maxPQ = new PriorityQueue<>((a, b) -> b - a);
        maxPQ.offer(5);
        maxPQ.offer(1);
        maxPQ.offer(3);
        
        System.out.println("\\nMax-heap:");
        while (!maxPQ.isEmpty()) {
            System.out.println(maxPQ.poll()); // 5, 3, 1
        }
        
        // ArrayDeque - Double-ended queue
        Deque<String> deque = new ArrayDeque<>();
        deque.addFirst("First");
        deque.addLast("Last");
        deque.addFirst("New First");
        
        System.out.println("\\nDeque: " + deque);
        System.out.println("RemoveFirst: " + deque.removeFirst());
        System.out.println("RemoveLast: " + deque.removeLast());
    }
}
\`\`\`

## So sánh các Collections

| Collection | Thứ tự | Trùng lặp | Null | Thread-safe | Hiệu năng |
|------------|--------|-----------|------|-------------|-----------|
| ArrayList | Có | Cho phép | Cho phép | Không | Truy cập O(1), Thêm/Xóa O(n) |
| LinkedList | Có | Cho phép | Cho phép | Không | Truy cập O(n), Thêm/Xóa đầu/cuối O(1) |
| HashSet | Không | Không | 1 null | Không | O(1) cho add, remove, contains |
| TreeSet | Có (sorted) | Không | Không | Không | O(log n) |
| HashMap | Không | Key không | 1 null key | Không | O(1) trung bình |
| TreeMap | Có (sorted) | Key không | Không | Không | O(log n) |

## Kết luận

Java Collections Framework là một phần không thể thiếu trong lập trình Java. Việc hiểu rõ các collection khác nhau và biết khi nào sử dụng loại nào sẽ giúp bạn viết code hiệu quả và tối ưu hơn.
    `,
    category: "java",
    date: "2024-01-20",
    readTime: "20 phút"
  },
  {
    id: "java-networking",
    title: "Lập trình mạng với Java Socket",
    excerpt: "Xây dựng ứng dụng client-server đơn giản sử dụng Java Socket API.",
    content: `
# Lập trình mạng với Java Socket

Lập trình mạng là một trong những lĩnh vực quan trọng trong phát triển phần mềm. Java cung cấp API mạnh mẽ để xây dựng các ứng dụng mạng thông qua package java.net. Trong bài viết này, chúng ta sẽ tìm hiểu chi tiết về Socket programming trong Java.

## Khái niệm cơ bản

### Socket là gì?

Socket là một endpoint (điểm cuối) của một kết nối hai chiều giữa hai chương trình chạy trên mạng. Socket được xác định bởi địa chỉ IP và số port.

**Các loại Socket:**
- **Stream Socket (TCP)**: Kết nối tin cậy, có thứ tự, không mất dữ liệu
- **Datagram Socket (UDP)**: Không kết nối, nhanh hơn nhưng có thể mất gói tin

### Mô hình Client-Server

\`\`\`
┌─────────────┐                    ┌─────────────┐
│   Client    │  ←── Request ───→  │   Server    │
│             │  ←── Response ──→  │             │
│  (Socket)   │                    │(ServerSocket)│
└─────────────┘                    └─────────────┘
\`\`\`

## TCP Socket Programming

### Server Socket cơ bản

\`\`\`java
import java.net.*;
import java.io.*;

public class SimpleServer {
    private ServerSocket serverSocket;
    private int port;
    
    public SimpleServer(int port) {
        this.port = port;
    }
    
    public void start() {
        try {
            // Tạo ServerSocket lắng nghe trên port
            serverSocket = new ServerSocket(port);
            System.out.println("Server đang chạy trên port " + port);
            System.out.println("Đang chờ kết nối từ client...");
            
            while (true) {
                // Chấp nhận kết nối từ client
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client đã kết nối: " + 
                    clientSocket.getInetAddress().getHostAddress());
                
                // Xử lý client trong thread riêng
                handleClient(clientSocket);
            }
        } catch (IOException e) {
            System.err.println("Lỗi server: " + e.getMessage());
        }
    }
    
    private void handleClient(Socket clientSocket) {
        try (
            // Tạo input/output streams
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true);
        ) {
            // Đọc tin nhắn từ client
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Nhận từ client: " + inputLine);
                
                // Gửi phản hồi
                String response = processMessage(inputLine);
                out.println(response);
                
                if (inputLine.equalsIgnoreCase("bye")) {
                    break;
                }
            }
        } catch (IOException e) {
            System.err.println("Lỗi xử lý client: " + e.getMessage());
        } finally {
            try {
                clientSocket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    
    private String processMessage(String message) {
        return "Server nhận được: " + message.toUpperCase();
    }
    
    public static void main(String[] args) {
        SimpleServer server = new SimpleServer(8080);
        server.start();
    }
}
\`\`\`

### Client Socket cơ bản

\`\`\`java
import java.net.*;
import java.io.*;

public class SimpleClient {
    private String serverAddress;
    private int serverPort;
    
    public SimpleClient(String address, int port) {
        this.serverAddress = address;
        this.serverPort = port;
    }
    
    public void connect() {
        try (
            Socket socket = new Socket(serverAddress, serverPort);
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true);
            BufferedReader console = new BufferedReader(
                new InputStreamReader(System.in));
        ) {
            System.out.println("Đã kết nối tới server!");
            System.out.println("Nhập tin nhắn (gõ 'bye' để thoát):");
            
            String userInput;
            while ((userInput = console.readLine()) != null) {
                // Gửi tin nhắn tới server
                out.println(userInput);
                
                // Nhận phản hồi từ server
                String response = in.readLine();
                System.out.println("Server: " + response);
                
                if (userInput.equalsIgnoreCase("bye")) {
                    break;
                }
            }
        } catch (UnknownHostException e) {
            System.err.println("Không tìm thấy server: " + serverAddress);
        } catch (IOException e) {
            System.err.println("Lỗi I/O: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        SimpleClient client = new SimpleClient("localhost", 8080);
        client.connect();
    }
}
\`\`\`

## Multi-threaded Server

Để xử lý nhiều client cùng lúc, chúng ta cần sử dụng multi-threading:

\`\`\`java
import java.net.*;
import java.io.*;
import java.util.concurrent.*;

public class MultiThreadedServer {
    private ServerSocket serverSocket;
    private ExecutorService threadPool;
    private volatile boolean running = true;
    
    public MultiThreadedServer(int port, int poolSize) throws IOException {
        serverSocket = new ServerSocket(port);
        threadPool = Executors.newFixedThreadPool(poolSize);
        System.out.println("Server khởi động trên port " + port);
        System.out.println("Thread pool size: " + poolSize);
    }
    
    public void start() {
        while (running) {
            try {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới: " + 
                    clientSocket.getInetAddress().getHostAddress());
                
                // Giao việc xử lý client cho thread pool
                threadPool.execute(new ClientHandler(clientSocket));
            } catch (IOException e) {
                if (running) {
                    System.err.println("Lỗi accept: " + e.getMessage());
                }
            }
        }
    }
    
    public void stop() {
        running = false;
        threadPool.shutdown();
        try {
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // Inner class xử lý từng client
    private static class ClientHandler implements Runnable {
        private Socket clientSocket;
        
        public ClientHandler(Socket socket) {
            this.clientSocket = socket;
        }
        
        @Override
        public void run() {
            try (
                BufferedReader in = new BufferedReader(
                    new InputStreamReader(clientSocket.getInputStream()));
                PrintWriter out = new PrintWriter(
                    clientSocket.getOutputStream(), true);
            ) {
                String threadName = Thread.currentThread().getName();
                out.println("Chào mừng! Bạn được xử lý bởi " + threadName);
                
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    System.out.println("[" + threadName + "] Nhận: " + inputLine);
                    
                    if (inputLine.equalsIgnoreCase("bye")) {
                        out.println("Tạm biệt!");
                        break;
                    }
                    
                    // Mô phỏng xử lý tốn thời gian
                    Thread.sleep(100);
                    out.println("Echo: " + inputLine);
                }
            } catch (IOException | InterruptedException e) {
                System.err.println("Lỗi xử lý client: " + e.getMessage());
            } finally {
                try {
                    clientSocket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    public static void main(String[] args) throws IOException {
        MultiThreadedServer server = new MultiThreadedServer(8080, 10);
        server.start();
    }
}
\`\`\`

## UDP Socket Programming

UDP là giao thức không kết nối, phù hợp cho các ứng dụng yêu cầu tốc độ cao và có thể chấp nhận mất gói tin.

### UDP Server

\`\`\`java
import java.net.*;

public class UDPServer {
    private DatagramSocket socket;
    private byte[] buffer = new byte[1024];
    
    public UDPServer(int port) throws SocketException {
        socket = new DatagramSocket(port);
        System.out.println("UDP Server đang chạy trên port " + port);
    }
    
    public void start() {
        while (true) {
            try {
                // Nhận packet
                DatagramPacket request = new DatagramPacket(buffer, buffer.length);
                socket.receive(request);
                
                // Xử lý dữ liệu
                String message = new String(request.getData(), 0, request.getLength());
                System.out.println("Nhận: " + message);
                
                // Chuẩn bị phản hồi
                InetAddress clientAddress = request.getAddress();
                int clientPort = request.getPort();
                String response = "ACK: " + message;
                byte[] responseData = response.getBytes();
                
                // Gửi phản hồi
                DatagramPacket responsePacket = new DatagramPacket(
                    responseData, responseData.length, clientAddress, clientPort);
                socket.send(responsePacket);
                
            } catch (Exception e) {
                System.err.println("Lỗi: " + e.getMessage());
            }
        }
    }
    
    public static void main(String[] args) throws SocketException {
        UDPServer server = new UDPServer(9876);
        server.start();
    }
}
\`\`\`

### UDP Client

\`\`\`java
import java.net.*;

public class UDPClient {
    private DatagramSocket socket;
    private InetAddress serverAddress;
    private int serverPort;
    
    public UDPClient(String address, int port) throws Exception {
        socket = new DatagramSocket();
        serverAddress = InetAddress.getByName(address);
        serverPort = port;
    }
    
    public String sendMessage(String message) throws Exception {
        // Gửi message
        byte[] sendData = message.getBytes();
        DatagramPacket sendPacket = new DatagramPacket(
            sendData, sendData.length, serverAddress, serverPort);
        socket.send(sendPacket);
        
        // Nhận response
        byte[] receiveData = new byte[1024];
        DatagramPacket receivePacket = new DatagramPacket(
            receiveData, receiveData.length);
        socket.receive(receivePacket);
        
        return new String(receivePacket.getData(), 0, receivePacket.getLength());
    }
    
    public void close() {
        socket.close();
    }
    
    public static void main(String[] args) throws Exception {
        UDPClient client = new UDPClient("localhost", 9876);
        
        String[] messages = {"Hello", "How are you?", "Goodbye"};
        for (String msg : messages) {
            String response = client.sendMessage(msg);
            System.out.println("Gửi: " + msg);
            System.out.println("Nhận: " + response);
        }
        
        client.close();
    }
}
\`\`\`

## Ứng dụng Chat đơn giản

Dưới đây là ví dụ hoàn chỉnh về ứng dụng chat client-server:

\`\`\`java
import java.net.*;
import java.io.*;
import java.util.*;
import java.util.concurrent.*;

public class ChatServer {
    private ServerSocket serverSocket;
    private Set<ClientHandler> clients = ConcurrentHashMap.newKeySet();
    
    public ChatServer(int port) throws IOException {
        serverSocket = new ServerSocket(port);
        System.out.println("Chat Server khởi động trên port " + port);
    }
    
    public void start() {
        while (true) {
            try {
                Socket socket = serverSocket.accept();
                ClientHandler client = new ClientHandler(socket, this);
                clients.add(client);
                new Thread(client).start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    
    public void broadcast(String message, ClientHandler sender) {
        for (ClientHandler client : clients) {
            if (client != sender) {
                client.sendMessage(message);
            }
        }
    }
    
    public void removeClient(ClientHandler client) {
        clients.remove(client);
    }
    
    private class ClientHandler implements Runnable {
        private Socket socket;
        private PrintWriter out;
        private BufferedReader in;
        private String username;
        private ChatServer server;
        
        public ClientHandler(Socket socket, ChatServer server) {
            this.socket = socket;
            this.server = server;
        }
        
        @Override
        public void run() {
            try {
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                out = new PrintWriter(socket.getOutputStream(), true);
                
                out.println("Nhập tên của bạn:");
                username = in.readLine();
                server.broadcast(username + " đã tham gia chat!", this);
                
                String message;
                while ((message = in.readLine()) != null) {
                    if (message.equalsIgnoreCase("/quit")) {
                        break;
                    }
                    server.broadcast(username + ": " + message, this);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                server.broadcast(username + " đã rời chat.", this);
                server.removeClient(this);
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        
        public void sendMessage(String message) {
            out.println(message);
        }
    }
    
    public static void main(String[] args) throws IOException {
        new ChatServer(8080).start();
    }
}
\`\`\`

## Best Practices

1. **Luôn đóng resources**: Sử dụng try-with-resources
2. **Xử lý timeout**: Thiết lập socket timeout để tránh block vô thời hạn
3. **Sử dụng thread pool**: Không tạo thread mới cho mỗi kết nối
4. **Validate input**: Kiểm tra dữ liệu từ client trước khi xử lý
5. **Logging**: Ghi log đầy đủ để debug
6. **Graceful shutdown**: Đóng server một cách an toàn

## Kết luận

Java Socket API cung cấp công cụ mạnh mẽ để xây dựng các ứng dụng mạng. Việc nắm vững kiến thức về TCP/UDP socket, multi-threading và các best practices sẽ giúp bạn xây dựng các ứng dụng mạng hiệu quả và đáng tin cậy.
    `,
    category: "java",
    date: "2024-02-01",
    readTime: "25 phút"
  },
  {
    id: "java-multithreading",
    title: "Đa luồng trong Java",
    excerpt: "Tìm hiểu cách tạo và quản lý thread, synchronized và concurrent utilities.",
    content: `
# Đa luồng trong Java

Multithreading (đa luồng) là khả năng của một chương trình thực hiện nhiều tác vụ đồng thời. Java được thiết kế với hỗ trợ multithreading ngay từ đầu, cung cấp các công cụ mạnh mẽ để xây dựng các ứng dụng concurrent.

## Khái niệm cơ bản

### Process vs Thread

- **Process**: Một chương trình đang chạy, có không gian bộ nhớ riêng
- **Thread**: Một đơn vị thực thi nhỏ nhất trong một process, chia sẻ bộ nhớ với các thread khác trong cùng process

### Vòng đời của Thread

\`\`\`
    ┌─────────┐
    │   New   │
    └────┬────┘
         │ start()
         ▼
    ┌─────────┐    yield()     ┌──────────┐
    │ Runnable│ ◄────────────► │  Running │
    └────┬────┘                └────┬─────┘
         │                          │
         │    wait()                │ sleep()
         │    join()                │ I/O blocked
         ▼                          ▼
    ┌─────────────────────────────────┐
    │           Blocked/Waiting       │
    └─────────────────────────────────┘
         │
         │ notify() / notifyAll() / timeout
         ▼
    ┌─────────┐
    │  Dead   │
    └─────────┘
\`\`\`

## Tạo Thread

### Cách 1: Extends Thread class

\`\`\`java
public class MyThread extends Thread {
    private String threadName;
    
    public MyThread(String name) {
        this.threadName = name;
    }
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(threadName + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(threadName + " bị interrupted");
                return;
            }
        }
        System.out.println(threadName + " hoàn thành!");
    }
    
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread-1");
        MyThread t2 = new MyThread("Thread-2");
        
        t1.start();  // Bắt đầu thread - gọi run() trong thread mới
        t2.start();
        
        // Lưu ý: Không gọi run() trực tiếp - nó sẽ chạy trong main thread
    }
}
\`\`\`

### Cách 2: Implements Runnable interface

\`\`\`java
public class MyRunnable implements Runnable {
    private String taskName;
    
    public MyRunnable(String name) {
        this.taskName = name;
    }
    
    @Override
    public void run() {
        System.out.println(taskName + " đang chạy trong " + 
            Thread.currentThread().getName());
        
        for (int i = 0; i < 3; i++) {
            System.out.println(taskName + " - Bước " + (i + 1));
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }
    
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable("Task-A"));
        Thread t2 = new Thread(new MyRunnable("Task-B"));
        
        t1.start();
        t2.start();
        
        // Sử dụng lambda (Java 8+)
        Thread t3 = new Thread(() -> {
            System.out.println("Lambda thread đang chạy!");
        });
        t3.start();
    }
}
\`\`\`

### Cách 3: Implements Callable interface

Callable cho phép trả về kết quả và throw exception.

\`\`\`java
import java.util.concurrent.*;

public class MyCallable implements Callable<Integer> {
    private int n;
    
    public MyCallable(int n) {
        this.n = n;
    }
    
    @Override
    public Integer call() throws Exception {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
            Thread.sleep(100);
        }
        return sum;
    }
    
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        Future<Integer> future1 = executor.submit(new MyCallable(10));
        Future<Integer> future2 = executor.submit(new MyCallable(20));
        
        // Lấy kết quả (blocking)
        System.out.println("Tổng 1-10: " + future1.get());
        System.out.println("Tổng 1-20: " + future2.get());
        
        executor.shutdown();
    }
}
\`\`\`

## Synchronization

Khi nhiều thread truy cập và thay đổi cùng một dữ liệu, có thể xảy ra race condition. Synchronization giúp đảm bảo tính nhất quán của dữ liệu.

### Synchronized Method

\`\`\`java
public class Counter {
    private int count = 0;
    
    // Synchronized method - chỉ một thread có thể thực thi tại một thời điểm
    public synchronized void increment() {
        count++;
    }
    
    public synchronized void decrement() {
        count--;
    }
    
    public synchronized int getCount() {
        return count;
    }
}
\`\`\`

### Synchronized Block

\`\`\`java
public class BankAccount {
    private double balance;
    private final Object lock = new Object();
    
    public void deposit(double amount) {
        synchronized (lock) {
            double newBalance = balance + amount;
            // Mô phỏng độ trễ xử lý
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            balance = newBalance;
        }
    }
    
    public boolean withdraw(double amount) {
        synchronized (lock) {
            if (balance >= amount) {
                double newBalance = balance - amount;
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                balance = newBalance;
                return true;
            }
            return false;
        }
    }
    
    public double getBalance() {
        synchronized (lock) {
            return balance;
        }
    }
}
\`\`\`

### wait() và notify()

Cho phép các thread giao tiếp với nhau.

\`\`\`java
public class ProducerConsumer {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int MAX_SIZE = 5;
    
    public void produce() throws InterruptedException {
        int value = 0;
        while (true) {
            synchronized (queue) {
                while (queue.size() == MAX_SIZE) {
                    System.out.println("Queue đầy, producer đợi...");
                    queue.wait();
                }
                
                System.out.println("Producing: " + value);
                queue.add(value++);
                queue.notifyAll();
            }
            Thread.sleep(500);
        }
    }
    
    public void consume() throws InterruptedException {
        while (true) {
            synchronized (queue) {
                while (queue.isEmpty()) {
                    System.out.println("Queue rỗng, consumer đợi...");
                    queue.wait();
                }
                
                int value = queue.poll();
                System.out.println("Consuming: " + value);
                queue.notifyAll();
            }
            Thread.sleep(1000);
        }
    }
    
    public static void main(String[] args) {
        ProducerConsumer pc = new ProducerConsumer();
        
        Thread producer = new Thread(() -> {
            try {
                pc.produce();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        Thread consumer = new Thread(() -> {
            try {
                pc.consume();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        producer.start();
        consumer.start();
    }
}
\`\`\`

## Concurrent Utilities (java.util.concurrent)

Java 5+ cung cấp các utility classes mạnh mẽ cho concurrent programming.

### ExecutorService

\`\`\`java
import java.util.concurrent.*;

public class ExecutorExample {
    public static void main(String[] args) throws Exception {
        // Fixed thread pool
        ExecutorService fixedPool = Executors.newFixedThreadPool(3);
        
        // Cached thread pool - tạo thread mới khi cần
        ExecutorService cachedPool = Executors.newCachedThreadPool();
        
        // Single thread executor
        ExecutorService singleThread = Executors.newSingleThreadExecutor();
        
        // Scheduled executor
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);
        
        // Submit tasks
        List<Future<String>> futures = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            Future<String> future = fixedPool.submit(() -> {
                Thread.sleep(1000);
                return "Task " + taskId + " hoàn thành bởi " + 
                    Thread.currentThread().getName();
            });
            futures.add(future);
        }
        
        // Thu thập kết quả
        for (Future<String> future : futures) {
            System.out.println(future.get());
        }
        
        // Scheduled tasks
        scheduler.scheduleAtFixedRate(() -> {
            System.out.println("Chạy mỗi 2 giây: " + System.currentTimeMillis());
        }, 0, 2, TimeUnit.SECONDS);
        
        // Shutdown
        fixedPool.shutdown();
        cachedPool.shutdown();
        singleThread.shutdown();
        
        // Đợi tất cả tasks hoàn thành
        fixedPool.awaitTermination(1, TimeUnit.MINUTES);
    }
}
\`\`\`

### Concurrent Collections

\`\`\`java
import java.util.concurrent.*;

public class ConcurrentCollectionsExample {
    public static void main(String[] args) {
        // Thread-safe Map
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        map.put("A", 1);
        map.putIfAbsent("B", 2);
        map.compute("A", (key, val) -> val + 10);
        
        // Thread-safe Queue
        BlockingQueue<String> queue = new LinkedBlockingQueue<>(10);
        
        // Producer
        new Thread(() -> {
            try {
                for (int i = 0; i < 20; i++) {
                    queue.put("Item " + i);  // Blocking nếu queue đầy
                    System.out.println("Produced: Item " + i);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
        
        // Consumer
        new Thread(() -> {
            try {
                while (true) {
                    String item = queue.take();  // Blocking nếu queue rỗng
                    System.out.println("Consumed: " + item);
                    Thread.sleep(500);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
        
        // CopyOnWriteArrayList - thread-safe, phù hợp khi đọc nhiều hơn ghi
        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
        list.add("Item 1");
        list.add("Item 2");
    }
}
\`\`\`

### Locks

\`\`\`java
import java.util.concurrent.locks.*;

public class ReentrantLockExample {
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition notEmpty = lock.newCondition();
    private final Condition notFull = lock.newCondition();
    private final Queue<Integer> queue = new LinkedList<>();
    private final int MAX_SIZE = 5;
    
    public void produce(int value) throws InterruptedException {
        lock.lock();
        try {
            while (queue.size() == MAX_SIZE) {
                notFull.await();  // Đợi cho đến khi có chỗ trống
            }
            queue.add(value);
            System.out.println("Produced: " + value);
            notEmpty.signalAll();  // Thông báo cho consumers
        } finally {
            lock.unlock();
        }
    }
    
    public int consume() throws InterruptedException {
        lock.lock();
        try {
            while (queue.isEmpty()) {
                notEmpty.await();  // Đợi cho đến khi có item
            }
            int value = queue.poll();
            System.out.println("Consumed: " + value);
            notFull.signalAll();  // Thông báo cho producers
            return value;
        } finally {
            lock.unlock();
        }
    }
}
\`\`\`

### Atomic Variables

\`\`\`java
import java.util.concurrent.atomic.*;

public class AtomicExample {
    private AtomicInteger counter = new AtomicInteger(0);
    private AtomicLong timestamp = new AtomicLong(System.currentTimeMillis());
    private AtomicBoolean flag = new AtomicBoolean(false);
    private AtomicReference<String> message = new AtomicReference<>("Initial");
    
    public void increment() {
        counter.incrementAndGet();  // Thread-safe increment
    }
    
    public void addAndGet(int delta) {
        counter.addAndGet(delta);
    }
    
    public boolean compareAndSet(int expected, int newValue) {
        return counter.compareAndSet(expected, newValue);  // CAS operation
    }
    
    public void updateMessage(String newMessage) {
        message.set(newMessage);
    }
    
    public static void main(String[] args) throws InterruptedException {
        AtomicExample example = new AtomicExample();
        
        // 100 threads cùng increment
        Thread[] threads = new Thread[100];
        for (int i = 0; i < 100; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    example.increment();
                }
            });
            threads[i].start();
        }
        
        // Đợi tất cả threads hoàn thành
        for (Thread t : threads) {
            t.join();
        }
        
        System.out.println("Final count: " + example.counter.get());  // 100000
    }
}
\`\`\`

## CompletableFuture (Java 8+)

\`\`\`java
import java.util.concurrent.*;

public class CompletableFutureExample {
    public static void main(String[] args) throws Exception {
        // Async computation
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "Hello";
        });
        
        // Chain operations
        CompletableFuture<String> result = future
            .thenApply(s -> s + " World")           // Transform
            .thenApply(String::toUpperCase);        // Transform again
        
        System.out.println(result.get());  // "HELLO WORLD"
        
        // Combine multiple futures
        CompletableFuture<Integer> future1 = CompletableFuture.supplyAsync(() -> 10);
        CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(() -> 20);
        
        CompletableFuture<Integer> combined = future1.thenCombine(future2, Integer::sum);
        System.out.println("Combined: " + combined.get());  // 30
        
        // Handling exceptions
        CompletableFuture<String> withError = CompletableFuture
            .supplyAsync(() -> {
                if (true) throw new RuntimeException("Error!");
                return "Success";
            })
            .exceptionally(ex -> "Recovered from: " + ex.getMessage());
        
        System.out.println(withError.get());
    }
}
\`\`\`

## Best Practices

1. **Ưu tiên Runnable/Callable** hơn extend Thread
2. **Sử dụng ExecutorService** thay vì tạo Thread trực tiếp
3. **Tránh synchronized không cần thiết** - ảnh hưởng hiệu năng
4. **Sử dụng concurrent collections** thay vì synchronized collections
5. **Cẩn thận với deadlock** - luôn acquire locks theo thứ tự nhất quán
6. **Sử dụng volatile** cho biến được chia sẻ đơn giản
7. **Prefer immutable objects** - thread-safe by design

## Kết luận

Multithreading trong Java là một chủ đề rộng và quan trọng. Nắm vững các khái niệm cơ bản và biết sử dụng đúng công cụ sẽ giúp bạn xây dựng các ứng dụng concurrent hiệu quả và an toàn.
    `,
    category: "java",
    date: "2024-02-10",
    readTime: "25 phút"
  },
  {
    id: "js-async-await",
    title: "Async/Await trong JavaScript",
    excerpt: "Cách sử dụng async/await để xử lý bất đồng bộ một cách dễ đọc và hiệu quả.",
    content: `
# Async/Await trong JavaScript

Async/await là cú pháp được giới thiệu trong ES2017 (ES8) để làm việc với Promise một cách dễ đọc và trực quan hơn. Nó cho phép viết code bất đồng bộ trông giống như code đồng bộ, giúp code dễ đọc và dễ debug hơn.

## Từ Callback Hell đến Async/Await

### Callback Hell

Trước khi có Promise và Async/Await, JavaScript sử dụng callbacks để xử lý bất đồng bộ:

\`\`\`javascript
// Callback Hell - khó đọc và bảo trì
getUserById(userId, function(error, user) {
    if (error) {
        handleError(error);
        return;
    }
    
    getOrdersByUserId(user.id, function(error, orders) {
        if (error) {
            handleError(error);
            return;
        }
        
        getProductsByOrderId(orders[0].id, function(error, products) {
            if (error) {
                handleError(error);
                return;
            }
            
            displayProducts(products);
        });
    });
});
\`\`\`

### Promise chains

\`\`\`javascript
// Tốt hơn với Promise chains
getUserById(userId)
    .then(user => getOrdersByUserId(user.id))
    .then(orders => getProductsByOrderId(orders[0].id))
    .then(products => displayProducts(products))
    .catch(error => handleError(error));
\`\`\`

### Async/Await

\`\`\`javascript
// Dễ đọc nhất với async/await
async function getProductsForUser(userId) {
    try {
        const user = await getUserById(userId);
        const orders = await getOrdersByUserId(user.id);
        const products = await getProductsByOrderId(orders[0].id);
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}
\`\`\`

## Cú pháp cơ bản

### async function

Keyword \`async\` trước function declaration biến function đó thành async function, luôn trả về một Promise.

\`\`\`javascript
// Async function declaration
async function fetchData() {
    return "Hello";
}

// Async function expression
const fetchData = async function() {
    return "Hello";
};

// Async arrow function
const fetchData = async () => {
    return "Hello";
};

// Gọi async function
fetchData().then(result => console.log(result));  // "Hello"

// Hoặc với await (trong async context)
const result = await fetchData();
console.log(result);  // "Hello"
\`\`\`

### await keyword

\`await\` chỉ có thể sử dụng bên trong async function. Nó tạm dừng execution cho đến khi Promise được resolve.

\`\`\`javascript
async function example() {
    console.log("Start");
    
    // await tạm dừng execution
    const result = await someAsyncOperation();
    
    // Dòng này chỉ chạy sau khi someAsyncOperation() hoàn thành
    console.log("Result:", result);
    
    console.log("End");
}
\`\`\`

## Xử lý lỗi

### try...catch

\`\`\`javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Lỗi khi fetch user:", error.message);
        
        // Có thể re-throw để caller xử lý
        throw error;
        
        // Hoặc trả về giá trị mặc định
        // return null;
    } finally {
        // Luôn chạy dù có lỗi hay không
        console.log("Cleanup completed");
    }
}

// Sử dụng
async function main() {
    try {
        const user = await fetchUserData(123);
        if (user) {
            console.log("User:", user.name);
        }
    } catch (error) {
        console.error("Failed to get user");
    }
}
\`\`\`

### Xử lý nhiều errors

\`\`\`javascript
async function processOrder(orderId) {
    let order, payment, shipping;
    
    try {
        order = await getOrder(orderId);
    } catch (error) {
        console.error("Không thể lấy order:", error.message);
        return { success: false, error: "ORDER_NOT_FOUND" };
    }
    
    try {
        payment = await processPayment(order);
    } catch (error) {
        console.error("Payment failed:", error.message);
        return { success: false, error: "PAYMENT_FAILED" };
    }
    
    try {
        shipping = await createShipment(order, payment);
    } catch (error) {
        // Rollback payment nếu shipping fail
        await refundPayment(payment);
        return { success: false, error: "SHIPPING_FAILED" };
    }
    
    return { success: true, order, payment, shipping };
}
\`\`\`

## Parallel Execution

### Sequential vs Parallel

\`\`\`javascript
// Sequential - chậm (chờ từng cái một)
async function sequential() {
    const user = await fetchUser();        // 1 giây
    const posts = await fetchPosts();      // 1 giây
    const comments = await fetchComments(); // 1 giây
    // Tổng: ~3 giây
}

// Parallel - nhanh (chạy đồng thời)
async function parallel() {
    const [user, posts, comments] = await Promise.all([
        fetchUser(),      // |
        fetchPosts(),     // | Chạy đồng thời
        fetchComments()   // |
    ]);
    // Tổng: ~1 giây (thời gian của request chậm nhất)
}
\`\`\`

### Promise.all

\`\`\`javascript
async function fetchDashboardData(userId) {
    try {
        const [user, notifications, stats, recentActivity] = await Promise.all([
            fetchUser(userId),
            fetchNotifications(userId),
            fetchStats(userId),
            fetchRecentActivity(userId)
        ]);
        
        return {
            user,
            notifications,
            stats,
            recentActivity,
            loadedAt: new Date()
        };
    } catch (error) {
        // Nếu BẤT KỲ promise nào fail, toàn bộ sẽ fail
        console.error("Failed to load dashboard:", error);
        throw error;
    }
}
\`\`\`

### Promise.allSettled

Không fail ngay khi có một promise fail - chờ tất cả hoàn thành.

\`\`\`javascript
async function fetchMultipleApis() {
    const results = await Promise.allSettled([
        fetch('https://api1.example.com/data'),
        fetch('https://api2.example.com/data'),
        fetch('https://api3.example.com/data')
    ]);
    
    const successfulResults = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    
    const failedResults = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason);
    
    console.log(\`Success: \${successfulResults.length}\`);
    console.log(\`Failed: \${failedResults.length}\`);
    
    return successfulResults;
}
\`\`\`

### Promise.race

Trả về kết quả của promise đầu tiên hoàn thành (hoặc fail).

\`\`\`javascript
// Timeout pattern
async function fetchWithTimeout(url, timeout = 5000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeout);
    });
    
    try {
        const response = await Promise.race([
            fetch(url),
            timeoutPromise
        ]);
        return response.json();
    } catch (error) {
        console.error('Request failed or timed out:', error.message);
        throw error;
    }
}

// Sử dụng
const data = await fetchWithTimeout('https://api.example.com/data', 3000);
\`\`\`

## Patterns nâng cao

### Async Iteration

\`\`\`javascript
async function* generateItems() {
    const items = await fetchItems();
    for (const item of items) {
        // Có thể await trong generator
        const enrichedItem = await enrichItem(item);
        yield enrichedItem;
    }
}

// Sử dụng for-await-of
async function processItems() {
    for await (const item of generateItems()) {
        console.log("Processing:", item);
    }
}
\`\`\`

### Retry Pattern

\`\`\`javascript
async function fetchWithRetry(url, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(\`Attempt \${attempt} of \${maxRetries}\`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(\`Attempt \${attempt} failed:\`, error.message);
            
            if (attempt === maxRetries) {
                throw new Error(\`Failed after \${maxRetries} attempts\`);
            }
            
            // Exponential backoff
            const waitTime = delay * Math.pow(2, attempt - 1);
            console.log(\`Waiting \${waitTime}ms before retry...\`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }
}

// Sử dụng
try {
    const data = await fetchWithRetry('https://api.example.com/unstable-endpoint');
    console.log('Success:', data);
} catch (error) {
    console.error('All retries failed:', error.message);
}
\`\`\`

### Concurrent Limit

\`\`\`javascript
async function asyncPool(poolLimit, items, iteratorFn) {
    const results = [];
    const executing = [];
    
    for (const item of items) {
        const promise = Promise.resolve().then(() => iteratorFn(item));
        results.push(promise);
        
        if (poolLimit <= items.length) {
            const executing_promise = promise.then(() => {
                executing.splice(executing.indexOf(executing_promise), 1);
            });
            executing.push(executing_promise);
            
            if (executing.length >= poolLimit) {
                await Promise.race(executing);
            }
        }
    }
    
    return Promise.all(results);
}

// Sử dụng - tối đa 3 requests đồng thời
const urls = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6'];
const results = await asyncPool(3, urls, async (url) => {
    const response = await fetch(url);
    return response.json();
});
\`\`\`

### Debounce với Async

\`\`\`javascript
function asyncDebounce(fn, wait) {
    let timeoutId = null;
    let resolveList = [];
    
    return function (...args) {
        return new Promise((resolve) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            
            resolveList.push(resolve);
            
            timeoutId = setTimeout(async () => {
                const result = await fn.apply(this, args);
                resolveList.forEach(r => r(result));
                resolveList = [];
            }, wait);
        });
    };
}

// Sử dụng cho search
const debouncedSearch = asyncDebounce(async (query) => {
    const response = await fetch(\`/api/search?q=\${query}\`);
    return response.json();
}, 300);

// Trong event handler
searchInput.addEventListener('input', async (e) => {
    const results = await debouncedSearch(e.target.value);
    displayResults(results);
});
\`\`\`

## Common Mistakes

### 1. Quên await

\`\`\`javascript
// ❌ Sai - promise không được await
async function bad() {
    const data = fetchData();  // Đây là Promise, không phải data
    console.log(data);  // Promise { <pending> }
}

// ✅ Đúng
async function good() {
    const data = await fetchData();
    console.log(data);  // Actual data
}
\`\`\`

### 2. await trong loop không cần thiết

\`\`\`javascript
// ❌ Chậm - sequential
async function slow() {
    const ids = [1, 2, 3, 4, 5];
    const results = [];
    
    for (const id of ids) {
        const result = await fetchById(id);  // Chờ từng cái
        results.push(result);
    }
    
    return results;
}

// ✅ Nhanh - parallel
async function fast() {
    const ids = [1, 2, 3, 4, 5];
    const results = await Promise.all(
        ids.map(id => fetchById(id))
    );
    return results;
}
\`\`\`

### 3. Không xử lý errors

\`\`\`javascript
// ❌ Nguy hiểm - unhandled rejection
async function risky() {
    const data = await fetchData();  // Nếu fail sẽ throw
    return data;
}

// ✅ An toàn
async function safe() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
\`\`\`

## Kết luận

Async/await là một trong những tính năng quan trọng nhất của JavaScript hiện đại. Nó giúp code bất đồng bộ dễ đọc, dễ hiểu và dễ debug hơn rất nhiều so với callbacks hay Promise chains. Hãy nắm vững các patterns và best practices để viết code async hiệu quả!
    `,
    category: "javascript",
    date: "2024-02-15",
    readTime: "20 phút"
  },
  {
    id: "js-dom-manipulation",
    title: "Thao tác DOM với JavaScript",
    excerpt: "Hướng dẫn chi tiết về cách truy xuất và thay đổi các phần tử HTML bằng JavaScript.",
    content: `
# Thao tác DOM với JavaScript

DOM (Document Object Model) là giao diện lập trình cho các tài liệu HTML và XML. Nó biểu diễn trang web dưới dạng cây các đối tượng, cho phép JavaScript truy cập và thay đổi nội dung, cấu trúc và style của trang.

## DOM là gì?

### Cấu trúc cây DOM

Khi trình duyệt tải một trang HTML, nó tạo ra một cây DOM:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="container">
      <h1>Hello World</h1>
      <p class="description">Welcome to my page</p>
    </div>
  </body>
</html>
\`\`\`

\`\`\`
Document
    └── html
        ├── head
        │   └── title
        │       └── "My Page"
        └── body
            └── div#container
                ├── h1
                │   └── "Hello World"
                └── p.description
                    └── "Welcome to my page"
\`\`\`

## Truy xuất phần tử DOM

### Các phương thức cơ bản

\`\`\`javascript
// Theo ID - trả về 1 element hoặc null
const header = document.getElementById('header');

// Theo class name - trả về HTMLCollection (live)
const items = document.getElementsByClassName('item');

// Theo tag name - trả về HTMLCollection (live)
const paragraphs = document.getElementsByTagName('p');

// Theo name attribute - trả về NodeList (live)
const inputs = document.getElementsByName('email');
\`\`\`

### Query Selectors (Hiện đại hơn)

\`\`\`javascript
// querySelector - trả về element đầu tiên match hoặc null
const button = document.querySelector('.btn-primary');
const firstItem = document.querySelector('#list li:first-child');
const emailInput = document.querySelector('input[type="email"]');

// querySelectorAll - trả về NodeList (static)
const allButtons = document.querySelectorAll('button');
const menuItems = document.querySelectorAll('nav.main-menu > ul > li');
const dataItems = document.querySelectorAll('[data-active="true"]');

// Duyệt qua NodeList
allButtons.forEach((btn, index) => {
    console.log(\`Button \${index}:\`, btn.textContent);
});

// Hoặc chuyển thành array
const buttonsArray = Array.from(allButtons);
const filtered = buttonsArray.filter(btn => btn.classList.contains('active'));
\`\`\`

### Traversing DOM

\`\`\`javascript
const element = document.querySelector('.target');

// Parent
const parent = element.parentNode;
const parentElement = element.parentElement;
const closestDiv = element.closest('div');  // Tìm ancestor gần nhất match selector

// Children
const children = element.children;          // HTMLCollection of child elements
const childNodes = element.childNodes;      // NodeList including text nodes
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Siblings
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Ví dụ thực tế
const listItem = document.querySelector('li.active');
const list = listItem.parentElement;           // ul
const allItems = list.children;                // Tất cả li
const nextItem = listItem.nextElementSibling;  // li tiếp theo
\`\`\`

## Thay đổi nội dung

### Text và HTML

\`\`\`javascript
const element = document.querySelector('.content');

// textContent - lấy/set text thuần túy
console.log(element.textContent);
element.textContent = 'Nội dung mới';

// innerHTML - lấy/set HTML
console.log(element.innerHTML);
element.innerHTML = '<strong>HTML</strong> mới với <em>formatting</em>';

// innerText - tương tự textContent nhưng xét đến CSS
console.log(element.innerText);  // Không bao gồm text của elements ẩn

// outerHTML - bao gồm cả element chứa
console.log(element.outerHTML);  // <div class="content">...</div>
element.outerHTML = '<section class="new">Thay thế hoàn toàn</section>';

// insertAdjacentHTML - chèn HTML tại vị trí cụ thể
element.insertAdjacentHTML('beforebegin', '<p>Trước element</p>');
element.insertAdjacentHTML('afterbegin', '<p>Đầu tiên bên trong</p>');
element.insertAdjacentHTML('beforeend', '<p>Cuối cùng bên trong</p>');
element.insertAdjacentHTML('afterend', '<p>Sau element</p>');
\`\`\`

### Attributes

\`\`\`javascript
const link = document.querySelector('a');

// getAttribute / setAttribute
const href = link.getAttribute('href');
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// hasAttribute / removeAttribute
if (link.hasAttribute('rel')) {
    link.removeAttribute('rel');
}

// Direct property access (cho standard attributes)
link.href = 'https://new-url.com';
link.id = 'main-link';
link.className = 'primary external';

// Data attributes
const card = document.querySelector('.card');
// <div class="card" data-user-id="123" data-role="admin">

// Sử dụng dataset
console.log(card.dataset.userId);    // "123"
console.log(card.dataset.role);      // "admin"
card.dataset.status = 'active';      // Thêm data-status="active"
delete card.dataset.role;            // Xóa data-role

// Hoặc getAttribute
const userId = card.getAttribute('data-user-id');
\`\`\`

### Classes

\`\`\`javascript
const element = document.querySelector('.box');

// classList API (hiện đại)
element.classList.add('active');           // Thêm class
element.classList.add('visible', 'large'); // Thêm nhiều class
element.classList.remove('hidden');        // Xóa class
element.classList.toggle('dark');          // Toggle class
element.classList.toggle('animated', true); // Force add
element.classList.toggle('animated', false); // Force remove
element.classList.replace('old', 'new');   // Thay thế class

// Kiểm tra class
if (element.classList.contains('active')) {
    console.log('Element is active');
}

// Duyệt qua classes
element.classList.forEach(cls => console.log(cls));

// className - string của tất cả classes
console.log(element.className);  // "box active visible"
element.className = 'new-box primary';  // Thay thế toàn bộ
\`\`\`

### Styles

\`\`\`javascript
const element = document.querySelector('.box');

// Inline styles
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';  // camelCase
element.style.fontSize = '18px';
element.style.border = '1px solid black';
element.style.cssText = 'color: blue; font-size: 20px;';  // Set nhiều styles

// Lấy computed styles (bao gồm CSS từ stylesheets)
const styles = window.getComputedStyle(element);
console.log(styles.color);
console.log(styles.getPropertyValue('font-size'));

// CSS Custom Properties (CSS Variables)
element.style.setProperty('--primary-color', '#007bff');
const primaryColor = getComputedStyle(element).getPropertyValue('--primary-color');

// Remove inline style
element.style.removeProperty('color');
element.style.color = '';  // Hoặc set empty string
\`\`\`

## Tạo và xóa elements

### Tạo elements

\`\`\`javascript
// Tạo element mới
const div = document.createElement('div');
div.id = 'new-div';
div.className = 'container';
div.textContent = 'Hello World';

// Tạo text node
const textNode = document.createTextNode('Some text');

// Tạo fragment (tối ưu khi thêm nhiều elements)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = \`Item \${i + 1}\`;
    fragment.appendChild(li);
}
document.querySelector('ul').appendChild(fragment);  // 1 reflow thay vì 100

// Clone element
const clone = div.cloneNode(true);  // true = deep clone (including children)
\`\`\`

### Thêm elements vào DOM

\`\`\`javascript
const parent = document.querySelector('.container');
const newElement = document.createElement('div');
newElement.textContent = 'New element';

// appendChild - thêm vào cuối
parent.appendChild(newElement);

// insertBefore - thêm trước element khác
const reference = parent.querySelector('.reference');
parent.insertBefore(newElement, reference);

// append - thêm nhiều nodes/strings vào cuối
parent.append(newElement, 'Text node', anotherElement);

// prepend - thêm vào đầu
parent.prepend(newElement);

// before / after - thêm trước/sau element
reference.before(newElement);
reference.after(newElement);

// replaceChild
parent.replaceChild(newElement, oldElement);

// replaceWith - thay thế element hiện tại
oldElement.replaceWith(newElement);
\`\`\`

### Xóa elements

\`\`\`javascript
const element = document.querySelector('.to-remove');

// remove() - cách hiện đại
element.remove();

// removeChild - cách cũ
const parent = element.parentNode;
parent.removeChild(element);

// Xóa tất cả children
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
// Hoặc đơn giản hơn
parent.innerHTML = '';
parent.replaceChildren();  // ES2020+
\`\`\`

## Event Handling

### Thêm Event Listeners

\`\`\`javascript
const button = document.querySelector('button');

// addEventListener - cách được khuyến nghị
function handleClick(event) {
    console.log('Button clicked!');
    console.log('Target:', event.target);
    console.log('Current target:', event.currentTarget);
}

button.addEventListener('click', handleClick);

// Arrow function
button.addEventListener('click', (e) => {
    console.log('Clicked at:', e.clientX, e.clientY);
});

// Options
button.addEventListener('click', handleClick, {
    once: true,      // Chỉ chạy 1 lần
    capture: true,   // Capture phase thay vì bubble
    passive: true    // Không gọi preventDefault()
});

// Remove listener (cần reference đến function)
button.removeEventListener('click', handleClick);
\`\`\`

### Event Object

\`\`\`javascript
document.querySelector('form').addEventListener('submit', function(event) {
    // Ngăn hành vi mặc định
    event.preventDefault();
    
    // Ngăn event bubbling
    event.stopPropagation();
    
    // Thông tin về event
    console.log('Type:', event.type);              // "submit"
    console.log('Target:', event.target);          // Element được click
    console.log('Current:', event.currentTarget);  // Element có listener
    console.log('Timestamp:', event.timeStamp);
    
    // Cho keyboard events
    // event.key, event.code, event.ctrlKey, event.shiftKey, etc.
    
    // Cho mouse events
    // event.clientX, event.clientY, event.button, etc.
});
\`\`\`

### Event Delegation

\`\`\`javascript
// Thay vì thêm listener cho mỗi button
// Thêm 1 listener cho parent và kiểm tra target

document.querySelector('.button-container').addEventListener('click', function(event) {
    // Kiểm tra xem click có phải trên button không
    if (event.target.matches('button.action-btn')) {
        const action = event.target.dataset.action;
        console.log('Action:', action);
        
        // Xử lý theo action
        switch (action) {
            case 'edit':
                handleEdit(event.target);
                break;
            case 'delete':
                handleDelete(event.target);
                break;
        }
    }
    
    // Hoặc dùng closest() cho nested elements
    const button = event.target.closest('button');
    if (button) {
        console.log('Button clicked:', button.id);
    }
});
\`\`\`

### Common Events

\`\`\`javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);
element.addEventListener('contextmenu', handler);  // Right click

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveDocument();
    }
});

// Form events
form.addEventListener('submit', handler);
input.addEventListener('input', handler);    // Mỗi thay đổi
input.addEventListener('change', handler);   // Sau blur
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window/Document events
window.addEventListener('load', handler);           // Tất cả resources loaded
document.addEventListener('DOMContentLoaded', handler);  // DOM ready
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);

// Custom events
const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Hello' },
    bubbles: true
});
element.dispatchEvent(customEvent);

element.addEventListener('myEvent', (e) => {
    console.log(e.detail.message);  // "Hello"
});
\`\`\`

## Best Practices

### Performance

\`\`\`javascript
// ❌ Tránh reflow/repaint nhiều lần
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    document.body.appendChild(div);  // 100 reflows
}

// ✅ Sử dụng Document Fragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
}
document.body.appendChild(fragment);  // 1 reflow

// ❌ Tránh đọc/ghi xen kẽ
elements.forEach(el => {
    const height = el.offsetHeight;  // Read
    el.style.height = height + 10 + 'px';  // Write
});

// ✅ Batch reads và writes
const heights = elements.map(el => el.offsetHeight);  // All reads
elements.forEach((el, i) => {
    el.style.height = heights[i] + 10 + 'px';  // All writes
});
\`\`\`

### Security

\`\`\`javascript
// ❌ Nguy hiểm - có thể bị XSS
const userInput = '<script>alert("hacked")</script>';
element.innerHTML = userInput;

// ✅ An toàn - escape HTML
element.textContent = userInput;

// Hoặc sanitize nếu cần render HTML
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
\`\`\`

## Kết luận

DOM manipulation là kỹ năng cơ bản và quan trọng cho mọi web developer. Mặc dù các framework hiện đại như React hay Vue đã abstract nhiều thao tác DOM, việc hiểu rõ DOM vẫn rất quan trọng để debug, tối ưu performance và làm việc với vanilla JavaScript.
    `,
    category: "javascript",
    date: "2024-02-20",
    readTime: "22 phút"
  },
  {
    id: "js-fetch-api",
    title: "Fetch API và HTTP Requests",
    excerpt: "Sử dụng Fetch API để gọi REST API và xử lý dữ liệu từ server.",
    content: `
# Fetch API và HTTP Requests

Fetch API là interface hiện đại để thực hiện HTTP requests trong JavaScript. Nó thay thế XMLHttpRequest (XHR) cũ với cú pháp dựa trên Promise, dễ sử dụng và mạnh mẽ hơn.

## Cơ bản về Fetch API

### GET Request đơn giản

\`\`\`javascript
// Cách cơ bản nhất
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Với async/await
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
\`\`\`

### Response Object

\`\`\`javascript
async function fetchWithDetails(url) {
    const response = await fetch(url);
    
    // Properties
    console.log('Status:', response.status);           // 200, 404, 500, etc.
    console.log('Status Text:', response.statusText);  // "OK", "Not Found", etc.
    console.log('OK:', response.ok);                   // true nếu status 200-299
    console.log('Headers:', response.headers);
    console.log('URL:', response.url);
    console.log('Redirected:', response.redirected);
    console.log('Type:', response.type);               // "basic", "cors", etc.
    
    // Đọc headers
    console.log('Content-Type:', response.headers.get('Content-Type'));
    
    // Body methods (chỉ được gọi 1 lần)
    // const text = await response.text();        // Plain text
    // const json = await response.json();        // JSON
    // const blob = await response.blob();        // Binary data
    // const formData = await response.formData(); // Form data
    // const arrayBuffer = await response.arrayBuffer(); // ArrayBuffer
    
    return response;
}
\`\`\`

### Kiểm tra Response

\`\`\`javascript
async function fetchSafely(url) {
    const response = await fetch(url);
    
    // Fetch không throw error cho HTTP errors (4xx, 5xx)
    // Cần kiểm tra manually
    if (!response.ok) {
        // Tạo error với thông tin chi tiết
        const error = new Error(\`HTTP Error: \${response.status} \${response.statusText}\`);
        error.status = response.status;
        error.response = response;
        throw error;
    }
    
    return response.json();
}

// Sử dụng
try {
    const data = await fetchSafely('https://api.example.com/data');
    console.log(data);
} catch (error) {
    if (error.status === 404) {
        console.log('Resource not found');
    } else if (error.status === 401) {
        console.log('Unauthorized - please login');
    } else {
        console.log('Error:', error.message);
    }
}
\`\`\`

## HTTP Methods

### POST Request

\`\`\`javascript
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create user');
    }
    
    return response.json();
}

// Sử dụng
const newUser = await createUser({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user'
});
console.log('Created user:', newUser);
\`\`\`

### PUT/PATCH Request

\`\`\`javascript
// PUT - thay thế toàn bộ resource
async function updateUser(userId, userData) {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
        throw new Error(\`Failed to update user: \${response.status}\`);
    }
    
    return response.json();
}

// PATCH - cập nhật một phần resource
async function patchUser(userId, partialData) {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(partialData)
    });
    
    return response.json();
}

// Sử dụng
await patchUser(123, { status: 'active' });
\`\`\`

### DELETE Request

\`\`\`javascript
async function deleteUser(userId) {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
    
    // DELETE thường trả về 204 No Content
    if (response.status === 204) {
        return true;
    }
    
    return response.json();
}
\`\`\`

## Headers và Authentication

### Custom Headers

\`\`\`javascript
// Tạo Headers object
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('X-Custom-Header', 'custom-value');

// Hoặc từ object
const headers2 = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-Key': 'your-api-key'
});

// Thao tác với headers
headers.set('Content-Type', 'text/plain');  // Override
headers.delete('X-Custom-Header');
console.log(headers.has('Content-Type'));   // true
console.log(headers.get('Content-Type'));   // "text/plain"

// Duyệt headers
for (const [key, value] of headers) {
    console.log(\`\${key}: \${value}\`);
}
\`\`\`

### Authentication

\`\`\`javascript
// Basic Authentication
const credentials = btoa('username:password');
fetch(url, {
    headers: {
        'Authorization': \`Basic \${credentials}\`
    }
});

// Bearer Token (JWT)
async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem('accessToken');
    
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': \`Bearer \${token}\`
        }
    });
    
    // Handle token expiration
    if (response.status === 401) {
        // Try to refresh token
        const refreshed = await refreshToken();
        if (refreshed) {
            // Retry request with new token
            return fetchWithAuth(url, options);
        } else {
            // Redirect to login
            window.location.href = '/login';
        }
    }
    
    return response;
}

// API Key
fetch(url, {
    headers: {
        'X-API-Key': 'your-api-key'
    }
});
\`\`\`

## Gửi dữ liệu

### JSON Data

\`\`\`javascript
async function postJSON(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    return response.json();
}
\`\`\`

### Form Data

\`\`\`javascript
// Từ form element
const form = document.querySelector('form');
const formData = new FormData(form);

fetch('/api/submit', {
    method: 'POST',
    body: formData  // Không cần set Content-Type, browser tự set
});

// Tạo FormData manually
const formData = new FormData();
formData.append('username', 'john');
formData.append('email', 'john@example.com');
formData.append('avatar', fileInput.files[0]);  // File upload

fetch('/api/users', {
    method: 'POST',
    body: formData
});
\`\`\`

### File Upload

\`\`\`javascript
async function uploadFile(file, onProgress) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    
    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        throw new Error('Upload failed');
    }
    
    return response.json();
}

// Multiple files
async function uploadMultipleFiles(files) {
    const formData = new FormData();
    
    files.forEach((file, index) => {
        formData.append(\`files[\${index}]\`, file);
    });
    
    const response = await fetch('/api/upload-multiple', {
        method: 'POST',
        body: formData
    });
    
    return response.json();
}
\`\`\`

### URL Search Params

\`\`\`javascript
// Tạo query string
const params = new URLSearchParams({
    search: 'javascript',
    page: 1,
    limit: 10
});

console.log(params.toString());  // "search=javascript&page=1&limit=10"

// Hoặc append
params.append('category', 'programming');
params.set('page', 2);  // Override
params.delete('limit');

// Fetch với query params
fetch(\`/api/search?\${params}\`);

// Parse từ URL
const url = new URL('https://example.com/search?q=test&page=1');
const searchParams = url.searchParams;
console.log(searchParams.get('q'));  // "test"
\`\`\`

## Request Options

### Đầy đủ options

\`\`\`javascript
fetch(url, {
    method: 'POST',                    // GET, POST, PUT, PATCH, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),        // Request body
    mode: 'cors',                      // cors, no-cors, same-origin
    credentials: 'include',            // include, same-origin, omit
    cache: 'no-cache',                 // default, no-cache, reload, force-cache
    redirect: 'follow',                // follow, error, manual
    referrerPolicy: 'no-referrer',     // no-referrer, origin, strict-origin, etc.
    signal: abortController.signal     // AbortSignal for cancellation
});
\`\`\`

### CORS

\`\`\`javascript
// Credentials (cookies, auth headers) with CORS
fetch('https://api.other-domain.com/data', {
    credentials: 'include',  // Gửi cookies cross-origin
    mode: 'cors'
});

// No CORS (limited - chỉ đọc được response type, không đọc được body)
fetch('https://api.other-domain.com/data', {
    mode: 'no-cors'
});
\`\`\`

### Timeout và Cancel

\`\`\`javascript
// AbortController để cancel request
const controller = new AbortController();
const signal = controller.signal;

// Set timeout
const timeoutId = setTimeout(() => {
    controller.abort();
}, 5000);

try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    return await response.json();
} catch (error) {
    if (error.name === 'AbortError') {
        console.log('Request was cancelled');
    } else {
        throw error;
    }
}

// Cancel button
const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click', () => {
    controller.abort();
});

// Timeout helper function
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}
\`\`\`

## Xây dựng API Client

\`\`\`javascript
class APIClient {
    constructor(baseURL, defaultHeaders = {}) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...defaultHeaders
        };
    }
    
    setAuthToken(token) {
        this.defaultHeaders['Authorization'] = \`Bearer \${token}\`;
    }
    
    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;
        
        const config = {
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers
            }
        };
        
        if (config.body && typeof config.body === 'object') {
            config.body = JSON.stringify(config.body);
        }
        
        const response = await fetch(url, config);
        
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new APIError(response.status, error.message || 'Request failed', error);
        }
        
        if (response.status === 204) {
            return null;
        }
        
        return response.json();
    }
    
    get(endpoint, params = {}) {
        const query = new URLSearchParams(params).toString();
        const url = query ? \`\${endpoint}?\${query}\` : endpoint;
        return this.request(url, { method: 'GET' });
    }
    
    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: data
        });
    }
    
    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: data
        });
    }
    
    patch(endpoint, data) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: data
        });
    }
    
    delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}

class APIError extends Error {
    constructor(status, message, data) {
        super(message);
        this.status = status;
        this.data = data;
        this.name = 'APIError';
    }
}

// Sử dụng
const api = new APIClient('https://api.example.com');
api.setAuthToken('your-jwt-token');

// GET
const users = await api.get('/users', { page: 1, limit: 10 });

// POST
const newUser = await api.post('/users', {
    name: 'John',
    email: 'john@example.com'
});

// PATCH
await api.patch('/users/123', { status: 'active' });

// DELETE
await api.delete('/users/123');
\`\`\`

## Error Handling

\`\`\`javascript
async function robustFetch(url, options = {}) {
    const maxRetries = options.retries || 3;
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);
            
            // Client errors (4xx) - không retry
            if (response.status >= 400 && response.status < 500) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || \`Client Error: \${response.status}\`);
            }
            
            // Server errors (5xx) - có thể retry
            if (response.status >= 500) {
                throw new Error(\`Server Error: \${response.status}\`);
            }
            
            return response;
        } catch (error) {
            lastError = error;
            
            // Network error hoặc server error - retry
            if (error.name === 'TypeError' || error.message.includes('Server Error')) {
                console.log(\`Attempt \${attempt} failed, retrying...\`);
                await new Promise(r => setTimeout(r, 1000 * attempt));  // Exponential backoff
                continue;
            }
            
            // Client error - không retry
            throw error;
        }
    }
    
    throw lastError;
}
\`\`\`

## Kết luận

Fetch API là công cụ mạnh mẽ và linh hoạt để làm việc với HTTP trong JavaScript. Với Promise-based API, nó tích hợp hoàn hảo với async/await và dễ dàng xây dựng các abstraction layers phức tạp. Hãy nhớ luôn kiểm tra response status và xử lý errors đúng cách!
    `,
    category: "javascript",
    date: "2024-03-01",
    readTime: "22 phút"
  },
  {
    id: "js-es6-features",
    title: "Tính năng ES6+ cần biết",
    excerpt: "Arrow functions, destructuring, spread operator, template literals và các tính năng JavaScript hiện đại.",
    content: `
# Tính năng ES6+ cần biết

ECMAScript 6 (ES6/ES2015) và các phiên bản sau đã mang đến nhiều tính năng mạnh mẽ cho JavaScript, giúp code ngắn gọn, dễ đọc và hiệu quả hơn. Bài viết này sẽ đi sâu vào các tính năng quan trọng nhất.

## let và const

### Sự khác biệt với var

\`\`\`javascript
// var - function scoped, có thể redeclare, hoisting
var x = 1;
var x = 2;  // OK
console.log(x);  // 2

// let - block scoped, không thể redeclare trong cùng scope
let y = 1;
// let y = 2;  // Error: Already declared

if (true) {
    let y = 3;  // OK - khác scope
    console.log(y);  // 3
}
console.log(y);  // 1

// const - block scoped, không thể reassign
const z = 1;
// z = 2;  // Error: Assignment to constant

// Nhưng có thể modify object properties
const obj = { a: 1 };
obj.a = 2;  // OK
obj.b = 3;  // OK
// obj = {};  // Error

// Và array elements
const arr = [1, 2, 3];
arr.push(4);  // OK
arr[0] = 10;  // OK
// arr = [];  // Error
\`\`\`

### Temporal Dead Zone (TDZ)

\`\`\`javascript
// var được hoisted và khởi tạo với undefined
console.log(a);  // undefined
var a = 1;

// let/const được hoisted nhưng không được khởi tạo
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 2;

// TDZ extends to function parameters
function test(x = y, y = 1) {  // Error: y used before declaration
    console.log(x, y);
}
\`\`\`

## Arrow Functions

### Cú pháp

\`\`\`javascript
// Cú pháp cơ bản
const add = (a, b) => a + b;

// Một tham số - có thể bỏ dấu ngoặc
const double = n => n * 2;

// Không có tham số
const greet = () => console.log('Hello!');

// Nhiều dòng - cần return explicit
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
};

// Trả về object - cần wrap trong ()
const createUser = (name, age) => ({ name, age, createdAt: new Date() });
\`\`\`

### this binding

Arrow functions không có \`this\` riêng - nó inherit từ enclosing scope:

\`\`\`javascript
// Vấn đề với regular function
const counter = {
    count: 0,
    start: function() {
        setInterval(function() {
            this.count++;  // this là global/undefined
            console.log(this.count);  // NaN
        }, 1000);
    }
};

// Giải pháp cũ với that = this
const counter1 = {
    count: 0,
    start: function() {
        const that = this;
        setInterval(function() {
            that.count++;
            console.log(that.count);
        }, 1000);
    }
};

// Giải pháp với arrow function
const counter2 = {
    count: 0,
    start: function() {
        setInterval(() => {
            this.count++;  // this là counter2
            console.log(this.count);  // 1, 2, 3, ...
        }, 1000);
    }
};

// Lưu ý: Arrow function không phù hợp làm method
const obj = {
    value: 42,
    getValue: () => this.value  // this không phải obj
};
console.log(obj.getValue());  // undefined
\`\`\`

## Template Literals

### Cú pháp cơ bản

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;  // "Hello, World!"

// Multi-line strings
const html = \`
    <div class="container">
        <h1>\${title}</h1>
        <p>\${description}</p>
    </div>
\`;

// Expressions
const a = 5;
const b = 10;
console.log(\`Sum: \${a + b}\`);  // "Sum: 15"
console.log(\`\${a > b ? 'a is greater' : 'b is greater'}\`);

// Function calls
const upper = str => str.toUpperCase();
console.log(\`Name: \${upper(name)}\`);  // "Name: WORLD"
\`\`\`

### Tagged Templates

\`\`\`javascript
// Custom template processing
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
        return result + str + value;
    }, '');
}

const name = 'JavaScript';
const version = 'ES6';
const result = highlight\`Learning \${name} version \${version}!\`;
// "Learning <mark>JavaScript</mark> version <mark>ES6</mark>!"

// SQL query builder (safe from injection)
function sql(strings, ...values) {
    const escaped = values.map(v => escapeSQL(v));
    return strings.reduce((query, str, i) => 
        query + str + (escaped[i] || ''), '');
}

const userId = "123; DROP TABLE users;";
const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;
// Safe query with escaped value

// Styled components pattern
function css(strings, ...values) {
    const styles = strings.reduce((acc, str, i) => 
        acc + str + (values[i] || ''), '');
    return styles.trim();
}

const buttonStyles = css\`
    background: \${primaryColor};
    padding: 10px 20px;
    border-radius: 4px;
\`;
\`\`\`

## Destructuring

### Object Destructuring

\`\`\`javascript
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Basic destructuring
const { name, age } = user;
console.log(name, age);  // "John" 30

// Rename variables
const { name: userName, email: userEmail } = user;
console.log(userName, userEmail);

// Default values
const { phone = 'N/A', age: userAge = 0 } = user;
console.log(phone);  // "N/A"

// Nested destructuring
const { address: { city, country } } = user;
console.log(city, country);  // "New York" "USA"

// Rest pattern
const { name: n, ...rest } = user;
console.log(rest);  // { age: 30, email: '...', address: {...} }

// Function parameters
function createUser({ name, email, role = 'user' }) {
    console.log(\`Creating \${role}: \${name} (\${email})\`);
}

createUser({ name: 'Alice', email: 'alice@example.com' });
\`\`\`

### Array Destructuring

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Basic destructuring
const [first, second] = numbers;
console.log(first, second);  // 1 2

// Skip elements
const [, , third] = numbers;
console.log(third);  // 3

// Rest pattern
const [head, ...tail] = numbers;
console.log(head, tail);  // 1 [2, 3, 4, 5]

// Default values
const [a, b, c, d, e, f = 6] = numbers;
console.log(f);  // 6

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2 1

// Nested arrays
const nested = [1, [2, 3], 4];
const [first2, [second2, third2]] = nested;
console.log(second2, third2);  // 2 3

// Function return values
function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = getMinMax([3, 1, 4, 1, 5]);
console.log(min, max);  // 1 5
\`\`\`

## Spread và Rest Operators

### Spread Operator (...)

\`\`\`javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];  // Shallow copy

// Insert in middle
const inserted = [0, ...arr1, 3.5, ...arr2, 7];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }
const withOverride = { ...obj1, b: 20 };  // { a: 1, b: 20 }

// Shallow copy
const original = { a: 1, nested: { b: 2 } };
const copy2 = { ...original };
copy2.nested.b = 20;  // Cẩn thận! Cũng thay đổi original.nested.b

// Deep copy (JSON method)
const deepCopy = JSON.parse(JSON.stringify(original));

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums));  // 6

// Convert NodeList to Array
const elements = [...document.querySelectorAll('div')];

// String to array
const chars = [..."Hello"];  // ['H', 'e', 'l', 'l', 'o']
\`\`\`

### Rest Parameters

\`\`\`javascript
// Collect remaining arguments
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Combine with regular params
function log(level, ...messages) {
    console.log(\`[\${level}]\`, ...messages);
}
log('INFO', 'User logged in', 'from IP:', '192.168.1.1');

// Destructuring with rest
function processUser({ name, email, ...extra }) {
    console.log(name, email);
    console.log('Extra data:', extra);
}

processUser({
    name: 'John',
    email: 'john@example.com',
    age: 30,
    role: 'admin'
});
\`\`\`

## Enhanced Object Literals

\`\`\`javascript
const name = 'John';
const age = 30;

// Shorthand property names
const user = { name, age };  // { name: 'John', age: 30 }

// Shorthand method definitions
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
const prop = 'dynamicKey';
const obj = {
    [prop]: 'value',
    [\`\${prop}_2\`]: 'value2',
    ['method_' + Date.now()]() {
        return 'dynamic method';
    }
};
console.log(obj.dynamicKey);  // 'value'

// Getter and Setter
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

console.log(person.fullName);  // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName);  // "Jane"
\`\`\`

## Classes

\`\`\`javascript
class Animal {
    // Private fields (ES2022)
    #id;
    
    // Static properties
    static kingdom = 'Animalia';
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#id = Math.random().toString(36);
    }
    
    // Instance method
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
    
    // Getter
    get info() {
        return \`\${this.name} is \${this.age} years old\`;
    }
    
    // Static method
    static isAnimal(obj) {
        return obj instanceof Animal;
    }
    
    // Private method
    #getSecretId() {
        return this.#id;
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override method
    speak() {
        console.log(\`\${this.name} barks!\`);
    }
    
    // New method
    fetch() {
        console.log(\`\${this.name} is fetching the ball\`);
    }
}

const dog = new Dog('Buddy', 3, 'Labrador');
dog.speak();  // "Buddy barks!"
console.log(dog.info);  // "Buddy is 3 years old"
console.log(Dog.kingdom);  // "Animalia"
\`\`\`

## Modules

\`\`\`javascript
// math.js - Named exports
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}

// Default export
export default class Calculator {
    add(a, b) { return a + b; }
}

// utils.js - Re-exports
export { add, multiply } from './math.js';
export { default as Calculator } from './math.js';

// main.js - Imports
import Calculator from './math.js';  // Default import
import { PI, add } from './math.js';  // Named imports
import { add as sum } from './math.js';  // Rename
import * as math from './math.js';  // Namespace import

console.log(math.PI);
console.log(math.add(1, 2));

// Dynamic import
async function loadModule() {
    const module = await import('./heavy-module.js');
    module.doSomething();
}
\`\`\`

## Promises và Async/Await

\`\`\`javascript
// Promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve({ data: 'Success' });
            } else {
                reject(new Error('URL required'));
            }
        }, 1000);
    });
}

// Promise chaining
fetchData('/api/data')
    .then(result => processData(result))
    .then(processed => saveData(processed))
    .catch(error => console.error(error))
    .finally(() => console.log('Done'));

// Async/Await
async function getData() {
    try {
        const result = await fetchData('/api/data');
        const processed = await processData(result);
        await saveData(processed);
        return processed;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        console.log('Done');
    }
}

// Parallel execution
const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
]);
\`\`\`

## Optional Chaining và Nullish Coalescing

\`\`\`javascript
const user = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

// Optional chaining (?.)
console.log(user?.address?.city);  // "New York"
console.log(user?.contact?.phone);  // undefined (không throw error)

// With method calls
user.getProfile?.();  // Chỉ gọi nếu method tồn tại

// With array access
const firstItem = arr?.[0];

// Nullish coalescing (??)
const value = null ?? 'default';  // "default"
const zero = 0 ?? 'default';  // 0 (khác với ||)
const empty = '' ?? 'default';  // '' (khác với ||)

// Combining
const city = user?.address?.city ?? 'Unknown';
\`\`\`

## Kết luận

ES6+ đã biến đổi JavaScript thành một ngôn ngữ hiện đại, mạnh mẽ hơn. Các tính năng như arrow functions, destructuring, modules, và async/await đã trở thành chuẩn trong phát triển JavaScript ngày nay. Hãy thực hành thường xuyên để nắm vững các tính năng này!
    `,
    category: "javascript",
    date: "2024-03-05",
    readTime: "25 phút"
  },
  {
    id: "js-nodejs-basics",
    title: "Giới thiệu Node.js cho lập trình mạng",
    excerpt: "Cơ bản về Node.js và cách xây dựng HTTP server đơn giản.",
    content: `
# Giới thiệu Node.js cho lập trình mạng

Node.js là runtime environment cho phép chạy JavaScript ở phía server. Được xây dựng trên Chrome's V8 JavaScript engine, Node.js nổi tiếng với mô hình non-blocking I/O, rất phù hợp cho các ứng dụng mạng real-time.

## Node.js là gì?

### Đặc điểm chính

- **Event-driven, non-blocking I/O**: Xử lý nhiều requests đồng thời mà không cần threading
- **Single-threaded**: Nhưng có thể scale horizontally
- **NPM ecosystem**: Thư viện packages lớn nhất thế giới
- **Cross-platform**: Chạy trên Windows, macOS, Linux

### Event Loop

\`\`\`javascript
// Node.js xử lý I/O operations không đồng bộ
console.log('1. Start');

setTimeout(() => {
    console.log('3. Timeout callback');
}, 0);

setImmediate(() => {
    console.log('4. Immediate callback');
});

process.nextTick(() => {
    console.log('2. Next tick');
});

console.log('5. End');

// Output:
// 1. Start
// 5. End
// 2. Next tick
// 3. Timeout callback (hoặc 4)
// 4. Immediate callback (hoặc 3)
\`\`\`

## Modules trong Node.js

### CommonJS Modules

\`\`\`javascript
// math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };
// hoặc
exports.subtract = (a, b) => a - b;

// main.js
const math = require('./math');
const { add, multiply } = require('./math');

console.log(math.add(1, 2));
console.log(add(3, 4));
\`\`\`

### ES Modules (ESM)

\`\`\`javascript
// math.mjs (hoặc set "type": "module" trong package.json)
export function add(a, b) {
    return a + b;
}

export default class Calculator {
    add(a, b) { return a + b; }
}

// main.mjs
import Calculator, { add } from './math.mjs';
\`\`\`

### Built-in Modules

\`\`\`javascript
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const url = require('url');
const crypto = require('crypto');
const os = require('os');
const events = require('events');
\`\`\`

## File System (fs)

### Đọc file

\`\`\`javascript
const fs = require('fs');
const fsPromises = require('fs').promises;

// Synchronous (blocking)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Asynchronous with callback
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(data);
});

// Asynchronous with Promises
async function readFile() {
    try {
        const data = await fsPromises.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Stream (for large files)
const readStream = fs.createReadStream('large-file.txt', 'utf8');
readStream.on('data', chunk => {
    console.log('Chunk:', chunk.length);
});
readStream.on('end', () => {
    console.log('Done reading');
});
readStream.on('error', err => {
    console.error('Error:', err);
});
\`\`\`

### Ghi file

\`\`\`javascript
const fs = require('fs');
const fsPromises = require('fs').promises;

// Synchronous
fs.writeFileSync('output.txt', 'Hello World');

// Asynchronous with callback
fs.writeFile('output.txt', 'Hello World', err => {
    if (err) throw err;
    console.log('File written');
});

// Asynchronous with Promises
async function writeFile() {
    await fsPromises.writeFile('output.txt', 'Hello World');
    console.log('File written');
}

// Append to file
fs.appendFileSync('log.txt', 'New log entry\\n');

// Stream (for large data)
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Line 1\\n');
writeStream.write('Line 2\\n');
writeStream.end('Final line');

writeStream.on('finish', () => {
    console.log('Done writing');
});
\`\`\`

### Thao tác với thư mục

\`\`\`javascript
const fs = require('fs');
const path = require('path');

// Tạo thư mục
fs.mkdirSync('new-folder');
fs.mkdirSync('nested/folders/deep', { recursive: true });

// Đọc thư mục
const files = fs.readdirSync('.');
console.log(files);

// Kiểm tra tồn tại
if (fs.existsSync('file.txt')) {
    console.log('File exists');
}

// Thông tin file
const stats = fs.statSync('file.txt');
console.log('Size:', stats.size);
console.log('Is file:', stats.isFile());
console.log('Is directory:', stats.isDirectory());
console.log('Created:', stats.birthtime);
console.log('Modified:', stats.mtime);

// Xóa file/thư mục
fs.unlinkSync('file.txt');  // Delete file
fs.rmdirSync('folder');  // Delete empty folder
fs.rmSync('folder', { recursive: true });  // Delete folder with contents

// Rename/Move
fs.renameSync('old.txt', 'new.txt');

// Copy
fs.copyFileSync('source.txt', 'dest.txt');

// Watch for changes
fs.watch('file.txt', (eventType, filename) => {
    console.log(\`\${eventType}: \${filename}\`);
});
\`\`\`

## HTTP Server

### Server cơ bản

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Request info
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    
    // Send response
    res.end('<h1>Xin chào từ Node.js!</h1>');
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
\`\`\`

### Routing cơ bản

\`\`\`javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    
    res.setHeader('Content-Type', 'application/json');
    
    // Simple routing
    if (req.method === 'GET' && pathname === '/') {
        res.end(JSON.stringify({ message: 'Welcome to API' }));
    }
    else if (req.method === 'GET' && pathname === '/users') {
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' }
        ];
        res.end(JSON.stringify(users));
    }
    else if (req.method === 'GET' && pathname.startsWith('/users/')) {
        const userId = pathname.split('/')[2];
        res.end(JSON.stringify({ id: userId, name: 'User ' + userId }));
    }
    else if (req.method === 'POST' && pathname === '/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const userData = JSON.parse(body);
            res.statusCode = 201;
            res.end(JSON.stringify({ 
                message: 'User created', 
                user: userData 
            }));
        });
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(3000);
\`\`\`

### Serving Static Files

\`\`\`javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url);
    
    if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
    }
    
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.statusCode = 404;
                res.end('404 Not Found');
            } else {
                res.statusCode = 500;
                res.end('Server Error');
            }
            return;
        }
        
        res.setHeader('Content-Type', contentType);
        res.end(data);
    });
});

server.listen(3000);
\`\`\`

## Express.js Framework

Express là framework phổ biến nhất cho Node.js web applications:

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(express.static('public'));  // Serve static files

// Custom middleware
app.use((req, res, next) => {
    console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

app.get('/users', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    res.json({
        page: parseInt(page),
        limit: parseInt(limit),
        users: []
    });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'User ' + id });
});

app.post('/users', (req, res) => {
    const userData = req.body;
    res.status(201).json({
        message: 'User created',
        user: { id: Date.now(), ...userData }
    });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    res.json({ id, ...userData });
});

app.delete('/users/:id', (req, res) => {
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
\`\`\`

## WebSocket với Socket.io

Real-time bidirectional communication:

\`\`\`javascript
// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Connection handling
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Listen for events
    socket.on('chat message', (msg) => {
        console.log('Message:', msg);
        // Broadcast to all clients
        io.emit('chat message', {
            user: socket.id,
            message: msg,
            timestamp: new Date()
        });
    });
    
    // Join room
    socket.on('join room', (room) => {
        socket.join(room);
        socket.to(room).emit('user joined', socket.id);
    });
    
    // Private message
    socket.on('private message', ({ to, message }) => {
        socket.to(to).emit('private message', {
            from: socket.id,
            message
        });
    });
    
    // Disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000);

// client.html
/*
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket = io();
    
    socket.on('connect', () => {
        console.log('Connected:', socket.id);
    });
    
    socket.on('chat message', (data) => {
        console.log('Received:', data);
    });
    
    function sendMessage(msg) {
        socket.emit('chat message', msg);
    }
</script>
*/
\`\`\`

## Making HTTP Requests

### Native http/https

\`\`\`javascript
const https = require('https');

function get(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

// Usage
const users = await get('https://api.github.com/users');
\`\`\`

### Với Fetch (Node 18+)

\`\`\`javascript
// Node.js 18+ có built-in fetch
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
\`\`\`

### Với Axios

\`\`\`javascript
const axios = require('axios');

// GET
const response = await axios.get('https://api.example.com/users');
console.log(response.data);

// POST
const newUser = await axios.post('https://api.example.com/users', {
    name: 'John',
    email: 'john@example.com'
});

// With config
const response2 = await axios({
    method: 'GET',
    url: 'https://api.example.com/users',
    headers: {
        'Authorization': 'Bearer token'
    },
    params: {
        page: 1,
        limit: 10
    }
});
\`\`\`

## Environment Variables

\`\`\`javascript
// .env file
/*
PORT=3000
DATABASE_URL=mongodb://localhost/mydb
API_KEY=secret123
*/

// Sử dụng dotenv
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Hoặc sử dụng trong code
const config = {
    port: parseInt(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL,
        name: process.env.DB_NAME
    }
};
\`\`\`

## Best Practices

### Error Handling

\`\`\`javascript
// Async error handling
app.get('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// Wrapper for async routes
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

app.get('/users', asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
}));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
});

// Unhandled rejection
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});

// Uncaught exception
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
\`\`\`

### Graceful Shutdown

\`\`\`javascript
const server = app.listen(3000);

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
\`\`\`

## Kết luận

Node.js là nền tảng mạnh mẽ cho lập trình mạng với JavaScript. Với event-driven architecture và ecosystem phong phú, Node.js là lựa chọn tuyệt vời cho các ứng dụng real-time, APIs, và microservices. Hãy bắt đầu với các ví dụ cơ bản và dần dần khám phá các tính năng nâng cao!
    `,
    category: "javascript",
    date: "2024-03-10",
    readTime: "28 phút"
  }
];

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getPostsByCategory = (category: 'java' | 'javascript'): Post[] => {
  return posts.filter(post => post.category === category);
};
