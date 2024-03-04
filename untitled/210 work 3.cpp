//
// Created by simon on 1/30/2024.
//
#include <iostream>

using namespace std;

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
            cerr << "Queue is empty, cannot remove" << endl;
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
            cerr << "Queue is empty, cannot peek" << endl;
            return T();
        }
        return front->data;
    }

    int getSize() {
        return size;
    }
};
//
//int main() {
//    Queue<int> q;
//    q.enqueue(2);
//    q.enqueue(3);
//    q.enqueue(5);
//    q.enqueue(7);
//    q.enqueue(11);
//    while (!q.isEmpty()) {
//        cout << q.peek() << " is the front of the queue and the size is: " << q.getSize() << endl;
//        q.dequeue();
//    }
//    cout << q.peek() << " is the front of the queue and the size is: " << q.getSize() << endl;
//}