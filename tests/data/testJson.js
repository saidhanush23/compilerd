{
  "testCases": [
    {
      "name": "Ruby Addition Test",
      "reqObject": {
        "language": "ruby",
        "code": "puts 1 + 1"
      },
      "expectedResponse": {
        "val": "2\n",
        "status": 200,
        "error": null
      }
    },
    {
      "name": "PHP Addition Test",
      "reqObject": {
        "language": "php",
        "code": "<?php echo 1 + 1; ?>"
      },
      "expectedResponse": {
        "val": "2",
        "status": 200,
        "error": null
      }
    },
    {
      "name": "Go Addition Test",
      "reqObject": {
        "language": "go",
        "code": "package main; import \"fmt\"; func main() { fmt.Println(1 + 1) }"
      },
      "expectedResponse": {
        "val": "2\n",
        "status": 200,
        "error": null
      }
    }
  ]
}

