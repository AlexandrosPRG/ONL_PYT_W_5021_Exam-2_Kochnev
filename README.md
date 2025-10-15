# Python – Second Exam – Kochnev Alexander

This repository contains code written for the **second exam** of the Python course. 
It includes tasks with Flask, SQL (SQLite) and Python functions solved as part of the test.

---

# Python – Druhá zkouška – Kočnev Alexander

Tento repozitář obsahuje kód vytvořený pro **druhou zkoušku** v rámci kurzu Pythonu. 
Zahrnuje úlohy z oblasti Flasku, SQL (SQLite) a funkcí v Pythonu, které byly řešeny během testu.

## Structure / Struktura
```text
ONL_PYT_W_5021_Exam-2_Kochnev/
├─ .idea/                          # PyCharm project settings (optional)
├─ Exam Kochnev - Answers/
│  ├─ app.py                       # Flask mini-API (CRUD)
│  ├─ ebook.py                     # EBook class example
│  ├─ exam_sql.sql                 # SQL snippets / tasks
│  ├─ requirements.txt             # Dependencies
│  └─ data/                        # Data (CSV/JSON) if used
├─ .gitignore
├─ LICENSE
└─ README.md
```

## Quick start / Rychlý start
```bash
# Create and activate venv
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

pip install -r "Exam Kochnev - Answers/requirements.txt"
python "Exam Kochnev - Answers/app.py"
# App runs on http://127.0.0.1:5000
```

## Endpoints (examples) / Příklady endpointů
- `GET /items` — list
- `POST /items` — create (JSON: { "name": "Apple", "qty": 5 })
- `PUT /items/1` — update
- `DELETE /items/1` — delete

---
