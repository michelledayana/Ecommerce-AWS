FROM python:3.11

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir images

EXPOSE 3015

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3015"]
