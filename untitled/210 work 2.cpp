//
// Created by the goat on 1/30/2024.
//

#include <iostream>
using namespace std;

template<typename T>
struct TreeNode {
    T data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(T val) : data(val), left(nullptr), right(nullptr) {}
};

template<typename T>
class BinarySearchTree {
    TreeNode<T>* root;

public:
    BinarySearchTree() : root(nullptr) {}

    void insert(T val) {
        root = insertNode(root, val);
    }

    // Slightly nicer implementation, no longer need to check in main
    bool find(T val) {
        return findNode(root, val) != nullptr;
    }
void levelOrderTraversal(){
        if(root == nullptr)
            cout << "no tree to print" << endl;
            return;
    }

private:
    TreeNode<T>* insertNode(TreeNode<T>* node, T val) {
        if (node == nullptr) {
            return new TreeNode<T>(val);
        }
        if (val < node->data) {
            node->left = insertNode(node->left, val);
        } else {
            node->right = insertNode(node->right, val);
        }
        return node;
    }

    TreeNode<T>* findNode(TreeNode<T>* node, T val) {
        if (node == nullptr || node->data == val) {
            return node;
        }

        if (val < node->data) {
            return findNode(node->left, val);
        } else {
            return findNode(node->right, val);
        }
    }
};

//int main() {
//    BinarySearchTree<int> bst;
//    bst.insert(5);
//    bst.insert(7);
//    bst.insert(4);
//    bst.insert(13);
//    bst.insert(1);
//
//    int target = 5;
//    if (bst.find(target)) {
//        cout << "Node with value " << target << " was found!" << endl;
//    } else {
//        cout << "Unable to find node with value " << target << endl;
//    }
//
//    BinarySearchTree<string> stringBst;
//    stringBst.insert("Apple");
//    stringBst.insert("Orange");
//    stringBst.insert("Banana");
//    stringBst.insert("Pineapple");
//
//    string strTarget = "Orange";
//
//    if (stringBst.find(strTarget)) {
//        cout << "Node with value " << strTarget << " was found!" << endl;
//    } else {
//        cout << "Unable to find node with value " << strTarget << endl;
//    }
//
//    return 0;
//}