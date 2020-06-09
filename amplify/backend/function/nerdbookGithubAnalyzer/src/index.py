def handler(event, context):
  print('received event:')
  print(event)
  print(context)
  return {
    'message': 'Hello from your new Amplify Python lambda!'
  }
