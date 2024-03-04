#include <iostream>
#pragma once
#include <chrono>
class Timer final
{
public:
    Timer()
            : _start( std::chrono::high_resolution_clock::now() )
    {
    }
    ~Timer() = default ;
    Timer( Timer const& ) = delete ;
    Timer& operator=( Timer const& ) = delete ;
    Timer( Timer const&& ) = delete ;
    Timer& operator=( Timer const&& ) = delete ;
    double get_elapsed() const
    {
        return std::chrono::duration<double,std::nano>(
                std::chrono::high_resolution_clock::now() - _start ).count() ;
    }
private:
    std::chrono::time_point<std::chrono::high_resolution_clock> _start ;
} ;

int main() {
    std::cout << "Hello, World!" << std::endl;

    return 0;
}
