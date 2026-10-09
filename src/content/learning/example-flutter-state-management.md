---
title: "Flutter state management with Riverpod"
date: 2026-10-08
category: "lesson"
summary: "Notes on providers, notifiers, and when to use each one."
tags: ["flutter", "riverpod"]
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
draft: false
---

## Key ideas
- A `Provider` exposes a read-only value.
- A `NotifierProvider` exposes state plus methods that change it.

```dart
final counterProvider = NotifierProvider<Counter, int>(Counter.new);

class Counter extends Notifier<int> {
  @override
  int build() => 0;
  void increment() => state++;
}
```

## What I will practice next
Rebuild the todo app using Riverpod.
