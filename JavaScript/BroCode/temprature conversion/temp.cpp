#include<bits/stdc++.h>
using namespace std;

int main(){

    string s;
    cin >> s;

    string ans="";

    for(int i=s.size()-1;i>=0;i--){
        if(i-3>=0 && s[i] == s[i-1] && s[i-2] == s[i-3] && s[i-2] != s[i-3]){
            if(i-4>=0 && s[i-4] == s[i-3]){
              ans.push_back(s[])
            }

        }

    }


    return 0;
}