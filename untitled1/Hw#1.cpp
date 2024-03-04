#include <iostream>
#include <vector>
#include <string>

using namespace std;


template<typename T>
class Stack{
private:
    vector<T> elements;
public:
    void push(T element){
        elements.push_back(element);
    }
    T pop(){
        if(elements.empty()){
            throw out_of_range("Stack is empty");
        }
        T topElement = elements.back();
        elements.pop_back();
        return topElement;
    }
T peak(){
    if(elements.empty()){
        throw out_of_range("Stack is empty");
        }
    return elements.back();
    }

bool isEmpty(){
        return elements.empty();
    }
int getSize(){
        return elements.size();
    }


};




struct ListNode {
    char data;
    ListNode* prev;
    ListNode* next;

    ListNode(char data) : data(data), prev(nullptr), next(nullptr) {}
};



class DoublyLinkedList {
    ListNode* head;
    ListNode* tail;
    int size = 0;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    void append(char data) {
        ListNode* newNode = new ListNode(data);
        if(head == nullptr) {
            head = newNode;
            tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
        size++;
    }

    ListNode* getHead() {
        return head;
    }

    void display() {
        ListNode* current = head;
        while(current != nullptr) {
            cout << current->data << "<->";
            current = current->next;
        }
        cout << endl;
    }
    void setHead(ListNode* newHead) {
        head = newHead;
    }
};


void reverseDoublyLinkedList(DoublyLinkedList &list) {
    ListNode* current = list.getHead();
    ListNode* temp = nullptr;

    while(current != nullptr) {
        temp = current->prev;
        current->prev = current->next;
        current->next = temp;
        current = current->prev;
    }

    if(temp != nullptr) {
        list.setHead(temp->prev);
    }
}


//Que

template<typename T>
struct Node {
    T data;
    Node<T> *next;
};

template<typename T>
class Queue {
private:
    Node<T> *front;
    Node<T> *rear;
    int size;

public:
    Queue() : front(nullptr), rear(nullptr), size(0) {}

    ~Queue() {
        while (!isEmpty()) {
            dequeue();
        }
    }

    bool isEmpty() {
        return size == 0;
    }

    void enqueue(T value) {
        Node<T> *newNode = new Node<T>{value, nullptr};
        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        size++;
    }

    T dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty, cannot remove" << endl;
            return T();
        }
        T dataValue = front->data;
        Node<T> *temp = front;
        front = front->next;
        delete temp;
        if (front == nullptr) {
            rear = nullptr;
        }
        size--;
        return dataValue;
    }

    T peek() {
        if (isEmpty()) {
            cout << "Queue is empty, cannot peek" << endl;
            return T();
        }
        return front->data;
    }

    int getSize() {
        return size;
    }
};
bool isPalindromeLL(const string &s){
    DoublyLinkedList s1;
    DoublyLinkedList s2;

    for (char c : s) {
        char x = tolower(c);
        s1.append(x);
        s2.append(x);
    }

    reverseDoublyLinkedList(s2);

    ListNode *forward = s1.getHead();
    ListNode *reverse = s2.getHead();

    while (forward && reverse) {
        if (forward->data != reverse->data) {
            return false;
        }
        forward = forward->next;
        reverse = reverse->next;
    }

    return true;
}





bool isPalindromeSQ(const string &s) {

    Stack<char> stack;
    Queue<char> queue;

    for (char c : s) {
        char x = tolower(c);
        stack.push(x);
        queue.enqueue(x);
    }

    while (!stack.isEmpty() && !queue.isEmpty()) {
        if (stack.pop() != queue.dequeue()) {
            return false;
        }
    }
    return stack.isEmpty() && queue.isEmpty();



}

int main(){
    string one = "ABCDCBA";
    string two = "yellow";
    string three = "racecar";
    string four = "RaCeCAr";

    cout << "1 = true";
    cout << "0 = false"<< endl;

    cout << "first one: " << isPalindromeLL(one) << endl;
    cout << "second one: " << isPalindromeLL(two) << endl;
    cout << "third one: " << isPalindromeLL(three) << endl;
    cout << "fourth one: " << isPalindromeLL(four) << endl;
    cout << "first one: " << isPalindromeSQ(one) << endl;
    cout << "second on: " << isPalindromeSQ(two) << endl;
    cout << "third one: " << isPalindromeSQ(three) << endl;
    cout << "fourth one: " << isPalindromeSQ(four) << endl;

}










































