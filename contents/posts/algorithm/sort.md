---
author: Dokyun Lim
pubDatetime: 2026-09-01T00:00:00Z
modDatetime: 2026-09-01T00:00:00.000Z
title: 정렬 알고리즘 기초 정리
slug: algorithm-sort-basics
featured: false
draft: false
tags:
  - algorithm
  - study
description: "버블/선택/삽입/카운팅 정렬 기초"
---

## 정렬이란

2개 이상의 자료를 특정 기준(크기, 문자열 등)에 따라 오름차순 또는 내림차순으로 재배열하는 것.

정렬 알고리즘을 비교할 때 보는 기준은 크게 네 가지다.

- **시간 복잡도**: 데이터 개수 `n`이 늘어날 때 비교/교환 횟수가 어떻게 늘어나는가
- **공간 복잡도**: 정렬을 위해 원본 배열 외에 추가 메모리가 얼마나 필요한가
- **안정성(Stability)**: 값이 같은 원소들의 상대적 순서가 정렬 후에도 유지되는가
- **제자리 정렬(In-place)**: 입력 배열 자체를 O(1)~O(log n) 수준의 추가 공간만으로 정렬할 수 있는가
  - swap시 사용되는 외부 변수는 추가 공간으로 정의하지 않음

```python
def bubble_sort(num_list):
    # 시간 복잡도: O(N^2) (최선, 평균, 최악 모두 N*(N-1)/2 번 비교)
    arr = num_list[:]
    n = len(arr)
    for i in range(n-1):
        for j in range(n-1-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    return arr


def selection_sort(num_list):
    # 시간 복잡도: O(N^2) (최선, 평균, 최악 모두 N*(N-1)/2 번 비교)
    arr = num_list[:]
    n = len(arr)
    for i in range(n-1):
        min_idx = i

        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


def insertion_sort(num_list):
    # 시간 복잡도: 최선 O(N), 평균/최악 O(N^2)
    # (이미 정렬된 상태일 때 O(N), 역순 정렬일 때 O(N^2))
    arr = num_list[:]
    n = len(arr)

    for i in range(1, n):
        for j in range(i, 0, -1):
            if arr[j-1] > arr[j]:
                arr[j-1], arr[j] = arr[j], arr[j-1]
            else:
                break

    return arr


def counting_sort(num_list):
    # 시간 복잡도: O(N + K) (N: 원소 개수, K: 배열 내 최댓값)
    if not num_list:
        return []

    n = len(num_list)

    max_num = num_list[0]
    for num in num_list:
        if num > max_num:
            max_num = num

    count_list = [0] * (max_num + 1)
    for num in num_list:
        count_list[num] += 1

    for i in range(1, max_num + 1):
        count_list[i] += count_list[i-1]

    result = [0] * n

    for i in range(n-1, -1, -1):
        num = num_list[i]
        num_idx = count_list[num] - 1
        result[num_idx] = num
        count_list[num] -= 1

    return result


arr1 = [5, 4, 3, 2, 1]

print(bubble_sort(arr1))
print(selection_sort(arr1))
print(insertion_sort(arr1))
print(counting_sort(arr1))
```


## 팀소트 (Timsort)

병합 정렬과 삽입 정렬을 결합한 하이브리드 정렬 알고리즘. 2002년 Tim Peters가 Python을 위해 설계했고, 지금은 Python(`list.sort`, `sorted`)과 Java(객체 배열 `Arrays.sort`), V8(Node.js/Chrome)의 기본 정렬로 쓰인다. 무작위 데이터보다 "일부만 섞인" 실제 데이터에서 특히 강하다.

[참고자료 - Naver D2 Tim Sort 문서](https://d2.naver.com/helloworld/0315536)

## 정렬 알고리즘 비교

| 알고리즘 | 최선 | 평균 | 최악 | 공간 | 안정 | 제자리 |
| --- | --- | --- | --- | --- | --- | --- |
| 버블 정렬 | O(n) | O(n²) | O(n²) | O(1) | O | O |
| 선택 정렬 | O(n²) | O(n²) | O(n²) | O(1) | X | O |
| 삽입 정렬 | O(n) | O(n²) | O(n²) | O(1) | O | O |
| 카운팅 정렬 | O(n+k) | O(n+k) | O(n+k) | O(n+k) | O | X |
| 팀소트 | O(n) | O(n log n) | O(n log n) | O(n) | O | X |

