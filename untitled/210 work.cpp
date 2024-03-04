#include <iostream>
#include <vector>
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

int main() {
    Stack<int> intStack;
    intStack.push(4);
    intStack.push(9);
    intStack.push(21);
    intStack.push(56);
    intStack.push(55);
    cout << "top element is: " << intStack.peak() << endl;
    intStack.pop();
    cout << "top element is: " << intStack.peak() << endl;
}

