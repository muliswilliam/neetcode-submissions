from collections import Counter
import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequencies = Counter(nums)
        heap: list[tuple[int, int]] = []

        for number, frequency in frequencies.items():
            heapq.heappush(heap, (frequency, number))

            if len(heap) > k:
                heapq.heappop(heap)

        result = []
        for frequency, number in heap:
            result.append(number)
        
        return result