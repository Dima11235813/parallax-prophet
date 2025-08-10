# Download Single File 

## PDF from git repo

### All text files
```
find . -type f -exec cat {} \; > all_content.txt
```

### Specific files
```
find . -name "*.py" -type f -exec cat {} \; > all-py-content.txt
find . -name "*.ts" -type f -exec cat {} \; > all-ts-content.txt
find . -name "*.java" -type f -exec cat {} \; > all-java-content.txt
find . -name "*.py" -type f -exec cat {} \; > all-py-content.txt
find . -name "*.rs" -type f -exec cat {} \; > all-rs-content.txt
find . -name "*.md" -type f -exec cat {} \; > all-md-content.txt
find . \( -name "*.cpp" -o -name "*.h" \) -type f -exec cat {} \; > all_cpp_h_content.txt
```