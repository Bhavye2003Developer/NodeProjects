#include <iostream>
using namespace std;

// Only for lowercase letters
string encrypt(string msg, int shift)
{
    int letter;
    string enc = "";
    for (int i = 0; i < msg.length(); ++i)
    {
        letter = (((msg[i] - 96) + shift) % 26) + 96;
        enc += char(letter);
    }
    return enc;
}

// Only for lowercase letters
string decrypt(string msg, int shift)
{
    int letter;
    string dec = "";
    for (int i = 0; i < msg.length(); ++i)
    {
        letter = ((26 + ((msg[i] - 96) - shift)) % 26) + 96;
        dec += char(letter);
    }
    return dec;
}

int main()
{
    int shift;
    string msg;
    cin >> msg >> shift;
    shift = shift%26;
    cout << encrypt(msg, shift) << "\n";
    cout << decrypt(encrypt(msg, shift), shift) << "\n";
}