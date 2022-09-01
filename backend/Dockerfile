FROM python:3.9

WORKDIR /python-docker

ENV PIP_INDEX_URL https://nexus.cloud.local/repository/pypi/simple
ENV PIP_TRUSTED_HOST nexus.cloud.local
ENV POETRY_VIRTUALENVS_CREATE false
ENV FLASK_APP=backend

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . backend

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=5000"]