#include <stdio.h>
#include <omp.h>

int main() {
    int count = 0;

    #pragma omp parallel
    {
        #pragma omp critical
        count++;
    }

    printf("Count: %d\n", count);

    return 0;
}
