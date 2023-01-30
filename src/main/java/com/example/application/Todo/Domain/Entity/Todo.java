package com.example.application.Todo.Domain.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Todo {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
  String task;
  Boolean done;

  public Todo() {
  }

  public Todo(String task) {
    this.task = task;
  }

  public Todo(Long id , String task, Boolean done) {
    this.id = id;
    this.task = task;
    this.done = done;
  }

  public Long getId() {
    return id;
  }

  public String getTask() {
    return task;
  }

  public void setTask(String task) {
    this.task = task;
  }

  public Boolean getDone() {
    return done;
  }

  public void setDone(Boolean done) {
    this.done = done;
  }
}
