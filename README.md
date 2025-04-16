# 🚀 poc-load-test

This project is a Proof of Concept (PoC) for running load tests on a .NET API using [k6](https://k6.io/), a modern load testing tool built for developers.

---

## 📦 Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- k6 installed globally:

```bash
npm install -g k6
```

---

## ▶️ Running the Example API

Navigate to the API project directory:

```bash
cd api/ApiExample
dotnet run
```

This will start the local API server.

---

## 🔥 Running the Load Test

Navigate to the `k6` directory and execute the following command:

```bash
k6 run index.js --vus 3 --duration 10s
```

### Command Breakdown

- `k6`: Executes the k6 test runner.
- `run`: Executes a test script.
- `index.js`: The test script file.
- `--vus 3`: Simulates 3 virtual users (concurrent users).
- `--duration 10s`: Runs the test for 10 seconds.

---

## 📊 Sample Test Output and Explanation

```
✓ status is 200
✓ max duration is 1s

checks.........................: 100.00% ✓ 60 ✗ 0
http_req_failed................: 0.00%   ✓ 0  ✗ 30
http_req_duration..............: avg=8.34ms   min=2.18ms  max=40.21ms
http_req_waiting...............: avg=7.32ms   min=1.06ms  max=38.87ms
http_reqs......................: 30
iterations.....................: 30
vus............................: 3
```

### 🔍 Result Highlights

- ✅ **100% success rate**: All requests returned HTTP 200.
- 🚀 **Low response times**: Average duration was only ~8ms.
- 👥 **Concurrency test**: Simulated 3 users for 10 seconds.
- 📈 **Throughput**: 30 iterations completed, meaning the server handled about 3 requests per second under this light load.
- 🔒 **No failures**: Zero request errors (`http_req_failed` was 0%).

This confirms the API is stable under light concurrent access. For more intense testing, increase `--vus` and `--duration`.

---
