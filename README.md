## RabbitMQ producer and consumer

A simple demonstration of a RabbitMQ message queue, using a node.js producer and python consumer.
Based on elements of this tutorial: https://www.architect.io/blog/2021-01-19/rabbitmq-docker-tutorial/

# Requirements

RabbitMQ
Node.js
Python3

# Installation

1. Clone this repo `git clone https://github.com/edpackard-work/rabbitmq-demo.git`
2. Navigate to root directory `/rabbitmq-demo`
3. Run the following commands:

```
cd rabbitmq-producer
npm install
cd ../rabbitmq-consumer
pip3 install -r requirements.txt
```

# Run RabbitMQ, the producer, and the consumer

1. Start a RabbitMQ server i.e. run `rabbitmq-server`, and access the management web UI (typically`http://localhost:15672/`)
2. Navigate to `rabbitmq/rabbitmq-producer` and run `npm start`
3. Open `http://localhost:3000/` and enter some messages, which will be sent to the queue.
4. Navigate to `rabbitmq/rabbitmq-consumer` and run `python3 consumer.py`
5. In the terminal, the message(s) sent in step 3 should appear.

