from pathlib import Path
import pandas as pd
from django.core.management.base import BaseCommand
from backend import settings
from recommend import models


class Command(BaseCommand):
    help = "initialize database"
    DATA_DIR = Path(settings.BASE_DIR) / "data"
    DATA_FILE = str(DATA_DIR / "dump.json")

    def _load_dataframes(self):
        try:
            data = pd.read_json(Command.DATA_FILE)
        except:
            print(f"[-] Reading {Command.DATA_FILE} failed")
            exit(1)
        return data

    def _initialize(self):
        """
        Sub PJT 1에서 만든 Dataframe을 이용하여 DB를 초기화합니다.
        """
        print("[*] Loading data...")
        dataframes = self._load_dataframes()

        print("[*] Initializing books...")
        models.Book.objects.all().delete()
        books = dataframes["books"]
        books_bulk = [
            models.Book(
                isbn=book.isbn,
                title=book.title,
                book_image_path=book.book_image_path,
                book_summary=book.book_summary,
                evaluation=book.evaluation,
                price=book.price,
                publisher=book.publisher,
                writer=book.writer,
                country=book.country,
                maincategory=book.maincategory,
                subcategory=book.subcategory,
                publihsed_date=book.publihsed_date
            )
            for book in books.itertuples()
        ]
        models.Book.objects.bulk_create(books_bulk)

        print("[+] Done")

    def handle(self, *args, **kwargs):
        self._initialize()
