package main

import (
  "os/exec"
  "strings"
  "testing"
)

func TestAddition(t *testing.T) {
  result, err := exec.Command("sh", "-c", `echo 'package main; import "fmt"; func main() { fmt.Println(1 + 1) }' | go run ../go_executor.go`).Output()
  if err != nil {
    t.Fatalf("Execution failed: %s", err)
  }
  expected := "2\n"
  if string(result) != expected {
    t.Fatalf("Expected %s but got %s", expected, result)
  }
}

func TestErrorHandling(t *testing.T) {
  result, err := exec.Command("sh", "-c", `echo 'package main; import "fmt"; func main() { fmt.Println(unknownVariable) }' | go run ../go_executor.go`).Output()
  if err == nil {
    t.Fatalf("Expected error but got none")
  }
  if !strings.Contains(string(result), "undefined: unknownVariable") {
    t.Fatalf("Expected undefined variable error but got %s", result)
  }
}
