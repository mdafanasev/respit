# Simple GET request

As a developer writing integration tests,
I want to easily mock HTTP requests,
So that I can confirm my client-side code correctly sends 
expected HTTP requests without needing a real backend service.

## Acceptance Criteria

### Setup and Run Respit

When I start the Respit server, it should listen for incoming WebSocket connections for management.

### Establish Management Connection

I can connect to Respit via a WebSocket (management connection) from my test runtime.
Upon successful connection, Respit should acknowledge the connection.

### Define Expected Requests

I can send a message via the management WebSocket with details of the expected HTTP GET request and the desired mock response.
Message format: { "method": "GET", "url": "/foo/bar", "response": "Hello" }.
Respit should acknowledge the receipt and registration of this mock rule.

### Trigger Test in Client App

In my client application's test environment (e.g., a simulated browser via Playwright), I can initiate an HTTP GET request to the specified URL (e.g., /foo/bar).

### Receive Mocked Response in Client

My client-side code should receive the mocked response ("Hello") from Respit for the GET request.

### Notify Test Runtime

After serving the mocked response, Respit should send a notification message back to the test runtime via the management WebSocket connection.
Message format (suggestion): { "method": "GET", "url": "/foo/bar", "status": "served" }.
The test suite can use this message to confirm the expected request was correctly sent by the client-side code.

### Shutdown and Cleanup

I can send a command via the management WebSocket to shutdown or reset Respit after my tests are completed.