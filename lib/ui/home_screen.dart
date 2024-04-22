import 'package:flutter/material.dart';
import 'package:porto/ui/add_story_screen.dart';
import 'package:porto/ui/info_detail_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My App'),
        backgroundColor: Colors.amber,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => InfoDetailScreen()),
              );
            },
            icon: Icon(Icons.info),
          )
        ],
      ),
      body: Center(child: Text('No content')),
      drawer: Drawer(
        child: ListView(
          children: const [
            DrawerHeader(
              child: Icon(Icons.person),
              decoration: BoxDecoration(
                color: Colors.amber,
              ),
            ),
            ListTile(
              leading: Icon(Icons.person),
              title: Text('akun'),
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('pengaturan'),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => AddStoryScreen()),
          );
        },
        child: Icon(Icons.add),
        backgroundColor: Colors.amber,
        foregroundColor: Colors.white,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
        ],
        selectedItemColor: Colors.amber,
      ),
    );
  }
}
