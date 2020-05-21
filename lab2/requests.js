const requests = [
    {
        'entity': 'Note',
        'endpoints': [
            {
                'name': 'Get my notes',
                'route': 'api/notes',
                'method': 'GET',
                'body': null,
            },
            {
                'name': 'Create note',
                'route': 'api/notes',
                'method': 'POST',
                'body': '{"title":"new note", "text":"Note text..."}',
            },
            {
                'name': 'Update note',
                'route': 'api/notes/{id}',
                'method': 'PUT',
                'body': '{"title":"updated note", "text":"Note text..."}',
            },
            {
                'name': 'Delete note',
                'route': 'api/notes/{id}',
                'method': 'DELETE',
                'body': null,
            },
        ],
    },
];