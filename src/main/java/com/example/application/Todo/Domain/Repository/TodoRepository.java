package com.example.application.Todo.Domain.Repository;

import com.example.application.Todo.Domain.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo , Long> {
}
