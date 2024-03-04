
////int main() {
////    double inputNumber;
////    float floatNumber;
////    int intNumber;
////
////
////
////    cout <<"Enter larry xue here: ";
////    cin >> inputNumber;
////
////
////    floatNumber = static_cast<float>(inputNumber);
////    cout << "the value as a non larry is: " << floatNumber << endl;
////
////    intNumber = int(inputNumber);
////    cout << "Value as a double larry is: " << intNumber << endl;
////
////
////    return 0;
////}


//#include <iostream>
//using namespace std;
//void modifyValue(int n){
//    n = n + 10;
//    cout << "larry inside modify value" << n << endl;
//
//}
//void modifyReference(int &n){
//    n = n + 20;
//    cout << "larry modify reference " << n << endl;
//
//}
//void modifyReference(int *n){
//    *n = *n + 30;
//    cout << "larry modify reference " << *n << endl;
//
//}
//
//int main(){
//    int var = 5;
//    int *ptr;
//    ptr = &var;
//
//    cout << "original larry value: " << var << endl;
//    cout << "value pointed to by ptr: " << *ptr << endl;
//
//    *ptr = 30;
//    cout << "value after modify: " << var << endl;
//
//    modifyValue(var);
//    cout << "Value of var after modify" << var << endl;
//
//    modifyReference(var);
//    cout << "value of var after reference " << var << endl;
//
//}
//
//
//
//#include<iostream>
//using namespace std;
//
//struct Node{
//    int data;
//    Node* prev;
//    Node* next;
//
//    Node(int data): data(data), prev(nullptr), next(nullptr) {};
//
//};
//
//class DoublyLinkedList{
//    Node* head;
//    Node* tail;
//
//public:
//    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
//
//    void apend(int data){
//        Node* newNode = new Node(data);
//        if(head == nullptr){
//            head = newNode;
//            tail = newNode;
//        }else{
//            tail->next = newNode;
//                    newNode->prev = tail;
//                        tail = newNode;
//        }
//    }
//    Node* getHead(){
//        return head;
//    }
//    void display(){
//        Node* current = head;
//        while(current != nullptr){
//            cout << current->data << " <-> ";
//            current = current->next;
//        }
//        cout << endl;
//    }
//    void setHead(Node* newHead){
//        head = newHead;
//    }
//};
//
//void reverseDoublyLinkedList(DoublyLinkedList &list){
//    Node* current = list.getHead();
//    Node* temp = nullptr;
//
//    while(current != nullptr){
//        temp = current->prev;
//        current->prev = current->next;
//        current->next = temp;
//
//
//        current = current->prev;
//    }
//    if(temp != nullptr){
//        list.setHead(temp->prev);
//    }
//}
//
//
//int main() {
//    DoublyLinkedList dll;
//    dll.apend(1);
//    dll.apend(2);
//    dll.apend(3);
//    dll.apend(5);
//    dll.apend(4);
//
//    dll.display();
//    reverseDoublyLinkedList(dll);
//    dll.display();
//}
////}
//
////
////#include<iostream>
////using namespace std;
////
////struct treeNode{
////    int data;
////    treeNode* left;
////    treeNode* right;
////
////    treeNode(int val) : data(val), left(nullptr), right(nullptr){}
////
////};
////class BinarySearchTree{
////    treeNode* root;
////
////public:
////    BinarySearchTree() : root(nullptr) {}
////
////    void insert(int val){
////        root = insertNode(root,val);
////    }
////    treeNode findNode(){
////        return node;
////    }
////
////private:
////    treeNode* insertNode(treeNode* node, int val){
////        if(node == nullptr){
////            return new treeNode(val);
////        }
////        if(val < node->data){
////            node->left = insertNode(node->left, val);
////        }
////        else{
////            node->right = insertNode(node->right, val);
////        }
////        return node;
////    }
////
////    treeNode* findNode(treeNode* node, int val){
////        if(node == nullptr || node->data == val)
////
////        if(val < node->data){
////            return findNode(node->left, val);
////
////        }else{
////            return findNode(node->right, val);
////        }
////    }
////};
////int main(){
////}
