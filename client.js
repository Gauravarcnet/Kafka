const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "zomato",
  brokers: ["192.168.29.214:9092"],
});