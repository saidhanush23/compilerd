package main

import (
  "fmt"
  "io/ioutil"
  "os"
  "os/exec"
)

func main() {
  code, err := ioutil.ReadAll(os.Stdin)
  if err != nil {
    fmt.Println(err)
    return
  }
  err = ioutil.WriteFile("temp.go", code, 0644)
  if err != nil {
    fmt.Println(err)
    return
  }
  output, err := exec.Command("go", "run", "temp.go").CombinedOutput()
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(output))
}
