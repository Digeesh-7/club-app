import 'dart:async';
import 'dart:math';
import 'package:gsheets/gsheets.dart';
import 'package:datapirates/models/question.dart';
import 'package:datapirates/models/quiz_modeles.dart';

class GoogleSheetsService {
  static const _credentials = r'''{
    "type": "service_account",
    "project_id": "datapirates-454304",
    "private_key_id": "761c1e1d07fafc9f263de3fa2b1b3327e0d82950",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9NVjA7NfWap0r\nywtK2BJse0KwJ8oqQdewb1BGFFKvZDAmh4fX+tlTZS80OXK+B6YE6E9Rdc51ob/B\nGgSyg+p1Vs1aXjD4hAaWys5KOMjkVbBW1PX8rAWhnWvWMrQJmfqj+0QAOqcK2fYc\nJHsCF3O0HXXjBtUhk09WkvF/gkKSVjP2pQK8YtKzDw8O17uxQMcDivjNyktuO8v5\np+5AcRQESWdEptBM2nx4iem955DnZQuBbFjbljCF6cWrH7DJl5k/oJiprq1b5spK\nUwmebSVp1p9+8yvzxiPy+OzbnF5Uqehs1alBeHW/JIbjKT9gbJT4YhKqn59i46o5\nplppNXZtAgMBAAECggEADo06x+OvRJCrM9ddhU0RkFb5LbPHCvGeFWC063QxWRyQ\neMt1pCO+cSPYDzaCikuWS3b+cAUVHYY/dConGv+lmY6qeSfDW77zrsc8ObMc/Yql\nkZgMBHnKbmqSr5pIrxsGOXRf/3st+69Vtpu2UNaIPIhY17QKfOw9GYBwTbPb9jBv\nLxrmPoT4esHy9x8kMyVEPN/Li1TWh93GzTiB+xsFyJjyni5sJiW9Alv+XkCPpHHI\nFUgGgcS/NsHl0q0E7vGvKZq0CAsMQm5ZOB5Vhgc0LV7Z1mQ2cEyyS/ivQgsbtoOi\nxagxFMcP2tfH4nDd6ojHhdPWm9lJLCsmm/Ft55ToAQKBgQDgoVYDnmaNMsTeLR3u\n4qdP/SR1N0qt1lyinZnkN9xzLELKct8TZkT40kYKd+D5PjPcGDgkW0A2oZn1teSP\n84SnPmBHRcf1U5ooqZcN/2z10ptRr7KfQZAfNktndr2raA/nvsGJagjhvAbKCKkQ\npwZQ1ubI19hg4g7cTQ5TOge0bQKBgQDXoai5qmA1vHAG3+RUO7UKoaF+gJ9Q1Izu\nmGlvPo21oumvXkfzHaV9AgavBvb4pzTquOwX97bIiCwpdIT68tLkszosgy8dEFgY\nB7nRLQYz3KBvDEhYl9gPXnrNxF7079nzNKhlAKdDVAJ+fRwohjw5znR6LLdhK4EL\nqdp8hreKAQKBgQDUIGd62V4c3yG8cjy/N7kqt3JzYviZ+0HVqyEFvJ7pAJY+WoZA\n6qYdl2zfO9/vX4dXxGNYKfgU3zzmJZQnQJ831JbVF5fCG+YLmkN0y45ZAj78v//d\nluuEHiDNHvv0XzwN7D0WCFVE3uxGZDFL8X7sXlTou7SxoSjJb9ckTzuxbQKBgQCe\njlKA45UHLl65z1wXzCedf6g+WtnLF9/hedTdZgPRsc9fklYZoI0VVK4ReW+U+25f\nwkZogU+4ONkwSmuWE4Obg2adYID+QAxm7xdlhlPvQqX9wexYqJ7I/lISh/jC5rM+\nsFO6oTZcvaNv2xMfgUU7xGHFjKfzHYgwSV9M/cpsAQKBgHp7Hcvc9c+fbeFIcZu3\nM59nWytUk33+UDCBtSDA27nc0hecL/Ca6e4KbcMgvcqQ11z8E8SR83ve91/8j/jd\n+5nfXygyH7nx7evEKCt5yGyd1r7tHmLEIvqkrOxoiGO+2wfVZrFzF+7OrN/Cws9I\nH4+l4anTRDS/a7kXgVO3B2nT\n-----END PRIVATE KEY-----\n",
    "client_email": "test-462@datapirates-454304.iam.gserviceaccount.com",
    "client_id": "110505346252249214550",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-462%40datapirates-454304.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }''';

  static const _spreadsheetId = '1jELP3OYZ5GyLDoWWDosB5dmzhtSh-K1RQi3LcA-Gh3E';
  
  // Sheet names
  static const _quizzesSheet = 'Quizzes';
  static const _questionsSheet = 'Questions';
  static const _optionsSheet = 'Options';
  static const _metadataSheet = 'Metadata';
  static const _attemptsSheet = 'QuizAttempts';
  static const _usersSheet = 'Users';

  // Connection management
  static final _gsheets = GSheets(_credentials);
  static Spreadsheet? _spreadsheet;
  static final Map<String, Timer> _cacheTimers = {};
  static final Random _random = Random();

  // Caching system
  static List<Quiz>? _cachedQuizzes;
  static DateTime? _cacheTimestamp;
  static const Duration _cacheExpiry = Duration(minutes: 5);
  static final Map<String, List<Map<String, dynamic>>> _leaderboardCache = {};
  static final Map<String, DateTime> _leaderboardCacheTime = {};

  // Request queue for write operations
  static final List<Future<void> Function()> _writeQueue = [];
  static bool _processingWrites = false;
  static Timer? _writeTimer;

  /* ========== CONNECTION OPTIMIZATION ========== */
  static Future<Spreadsheet> _getSpreadsheet() async {
    if (_spreadsheet != null) return _spreadsheet!;
    
    // Add jitter to prevent thundering herd
    await Future.delayed(Duration(milliseconds: _random.nextInt(500)));
    
    _spreadsheet = await _gsheets.spreadsheet(_spreadsheetId);
    return _spreadsheet!;
  }

  /* ========== CACHING SYSTEM ========== */
  static bool _isCacheValid() {
    if (_cachedQuizzes == null || _cacheTimestamp == null) return false;
    return DateTime.now().difference(_cacheTimestamp!).inMinutes < _cacheExpiry.inMinutes;
  }

  static void _setCacheTimer() {
    _cacheTimers['quizzes']?.cancel();
    _cacheTimers['quizzes'] = Timer(_cacheExpiry, () {
      _cachedQuizzes = null;
      _cacheTimestamp = null;
    });
  }

  /* ========== RETRY MECHANISM ========== */
  static Future<T> _withRetry<T>(Future<T> Function() operation, {int maxRetries = 3}) async {
    Exception? lastException;
    
    for (int attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (e) {
        lastException = e is Exception ? e : Exception(e.toString());
        
        if (attempt == maxRetries) break;
        
        // Exponential backoff with jitter
        final delayMs = (100 * (1 << (attempt - 1))) + _random.nextInt(100);
        await Future.delayed(Duration(milliseconds: delayMs));
        
        print('Retry attempt $attempt/$maxRetries after ${delayMs}ms delay');
      }
    }
    
    throw lastException!;
  }

  /* ========== WRITE QUEUE SYSTEM ========== */
  static Future<T> _queueWrite<T>(Future<T> Function() writeOperation) async {
    final completer = Completer<T>();
    
    _writeQueue.add(() async {
      try {
        final result = await writeOperation();
        completer.complete(result);
      } catch (e) {
        completer.completeError(e);
      }
    });
    
    _processWriteQueue();
    return completer.future;
  }

  static void _processWriteQueue() {
    if (_processingWrites || _writeQueue.isEmpty) return;
    
    _processingWrites = true;
    _writeTimer?.cancel();
    
    _writeTimer = Timer.periodic(Duration(milliseconds: 100), (timer) async {
      if (_writeQueue.isEmpty) {
        timer.cancel();
        _processingWrites = false;
        return;
      }
      
      final operation = _writeQueue.removeAt(0);
      try {
        await operation();
      } catch (e) {
        print('Write operation failed: $e');
      }
      
      // Small delay between writes to prevent rate limiting
      await Future.delayed(Duration(milliseconds: 50));
    });
  }

  /* ========== OPTIMIZED DATE HANDLING ========== */
  static DateTime _excelSerialToDateTime(double excelSerial) {
    final baseDate = DateTime(1899, 12, 30);
    final days = excelSerial.floor();
    final dayFraction = excelSerial - days;
    final adjustedDays = days > 59 ? days - 1 : days;
    
    final date = baseDate.add(Duration(days: adjustedDays));
    
    final totalSeconds = (dayFraction * 86400).round();
    final hours = totalSeconds ~/ 3600;
    final minutes = (totalSeconds % 3600) ~/ 60;
    final seconds = totalSeconds % 60;
    
    return date.add(Duration(hours: hours, minutes: minutes, seconds: seconds));
  }

  static DateTime _parseDate(dynamic dateValue) {
    try {
      if (dateValue is DateTime) return dateValue;
      if (dateValue is String) {
        try {
          return DateTime.parse(dateValue);
        } catch (_) {
          final excelSerial = double.tryParse(dateValue);
          if (excelSerial != null) return _excelSerialToDateTime(excelSerial);
          throw FormatException('Invalid date format: $dateValue');
        }
      }
      if (dateValue is num) return _excelSerialToDateTime(dateValue.toDouble());
      return DateTime.now().add(const Duration(days: 30));
    } catch (e) {
      return DateTime.now().add(const Duration(days: 30));
    }
  }

  /* ========== OPTIMIZED QUIZ OPERATIONS ========== */
  static Future<List<Quiz>> loadQuizzes() async {
    // Return cached data if valid
    if (_isCacheValid()) {
      print('Returning cached quizzes (${_cachedQuizzes!.length} quizzes)');
      return List.from(_cachedQuizzes!);
    }

    return await _withRetry(() async {
      print('Loading quizzes from Google Sheets...');
      final stopwatch = Stopwatch()..start();
      
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      
      final quizMap = <String, Quiz>{};
      final questionMap = <String, Question>{};

      // Parallel loading of all sheets
      final futures = [
        spreadsheet.worksheetByTitle(_quizzesSheet)!.values.allRows(fromRow: 2),
        spreadsheet.worksheetByTitle(_questionsSheet)!.values.allRows(fromRow: 2),
        spreadsheet.worksheetByTitle(_optionsSheet)!.values.allRows(fromRow: 2),
      ];

      final results = await Future.wait(futures);
      final quizRows = results[0];
      final questionRows = results[1];
      final optionRows = results[2];

      // Process quizzes
      for (final row in quizRows) {
        if (row.length >= 3) {
          quizMap[row[0]] = Quiz(
            topic: row[1],
            expiryDate: _parseDate(row[2]),
            questions: [],
          );
        }
      }

      // Process questions
      for (final row in questionRows) {
        if (row.length >= 4 && quizMap.containsKey(row[1])) {
          final question = Question(
            questionText: row[2],
            options: [],
            correctOptionIndex: int.tryParse(row[3]) ?? 0,
          );
          questionMap[row[0]] = question;
          quizMap[row[1]]!.questions.add(question);
        }
      }

      // Process options
      for (final row in optionRows) {
        if (row.length >= 4 && questionMap.containsKey(row[1])) {
          final question = questionMap[row[1]]!;
          final index = int.tryParse(row[3]) ?? 0;
          while (question.options.length <= index) {
            question.options.add('');
          }
          question.options[index] = row[2];
        }
      }

      final quizzes = quizMap.values.toList();
      
      // Cache the results
      _cachedQuizzes = quizzes;
      _cacheTimestamp = DateTime.now();
      _setCacheTimer();

      stopwatch.stop();
      print('Loaded ${quizzes.length} quizzes in ${stopwatch.elapsedMilliseconds}ms');
      
      return quizzes;
    });
  }

  /* ========== OPTIMIZED USER OPERATIONS ========== */
  static Future<bool> validateUser(String rollNumber) async {
    return await _withRetry(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_usersSheet)!;
      final rows = await sheet.values.allRows();
      
      return rows.any((row) => row.length >= 2 && row[1] == rollNumber);
    });
  }

  static Future<bool> registerUser(String rollNumber) async {
    final completer = Completer<bool>();
    
    _writeQueue.add(() async {
      try {
        await ensureSheetsExist();
        final spreadsheet = await _getSpreadsheet();
        final sheet = spreadsheet.worksheetByTitle(_usersSheet)!;
        
        // Check if user exists
        final rows = await sheet.values.allRows();
        for (final row in rows) {
          if (row.length >= 2 && row[1] == rollNumber) {
            completer.complete(false);
            return;
          }
        }
        
        // Register new user
        await sheet.values.appendRow([
          'user_${DateTime.now().millisecondsSinceEpoch}_${_random.nextInt(1000)}',
          rollNumber,
          DateTime.now().toIso8601String(),
          DateTime.now().toIso8601String(),
          '0'
        ]);
        
        completer.complete(true);
      } catch (e) {
        completer.completeError(e);
      }
    });
    
    _processWriteQueue();
    return completer.future;
  }

  static Future<bool> hasUserAttemptedQuiz(String rollNumber, String quizTopic) async {
    return await _withRetry(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_attemptsSheet)!;
      final rows = await sheet.values.allRows(fromRow: 2);
      
      return rows.any((row) => 
        row.length >= 3 && 
        row[1] == rollNumber && 
        row[2] == quizTopic
      );
    });
  }

  /* ========== OPTIMIZED ATTEMPT OPERATIONS ========== */
  static Future<void> saveQuizAttempt({
    required String rollNumber,
    required String quizTopic,
    required int score,
    required int totalQuestions,
    required int correctAnswers,
  }) async {
    return await _queueWrite(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_attemptsSheet)!;
      
      await sheet.values.appendRow([
        DateTime.now().toIso8601String(),
        rollNumber,
        quizTopic,
        score.toString(),
        totalQuestions.toString(),
        correctAnswers.toString()
      ]);
      
      // Clear leaderboard cache for this quiz
      _leaderboardCache.remove(quizTopic);
      _leaderboardCacheTime.remove(quizTopic);
    });
  }

  /* ========== OPTIMIZED LEADERBOARD OPERATIONS ========== */
  static Future<List<Map<String, dynamic>>> getTestLeaderboard(String quizTopic) async {
    // Check cache first
    final cacheTime = _leaderboardCacheTime[quizTopic];
    if (cacheTime != null && 
        DateTime.now().difference(cacheTime).inMinutes < 2 &&
        _leaderboardCache.containsKey(quizTopic)) {
      return List.from(_leaderboardCache[quizTopic]!);
    }

    return await _withRetry(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_attemptsSheet)!;
      final rows = await sheet.values.allRows(fromRow: 2);
      
      final attempts = <Map<String, dynamic>>[];
      
      for (final row in rows) {
        if (row.length >= 6 && row[2] == quizTopic) {
          attempts.add({
            'rollNumber': row[1],
            'score': int.tryParse(row[3]) ?? 0,
            'timestamp': row[0],
            'correctAnswers': int.tryParse(row[5]) ?? 0,
            'totalQuestions': int.tryParse(row[4]) ?? 1,
          });
        }
      }
      
      attempts.sort((a, b) => b['score'].compareTo(a['score']));
      
      // Cache the results
      _leaderboardCache[quizTopic] = attempts;
      _leaderboardCacheTime[quizTopic] = DateTime.now();
      
      return attempts;
    });
  }

  /* ========== SHEET MANAGEMENT ========== */
  static Future<void> ensureSheetsExist() async {
    return await _withRetry(() async {
      final spreadsheet = await _getSpreadsheet();
      
      for (final sheetName in [
        _quizzesSheet, _questionsSheet, 
        _optionsSheet, _metadataSheet, 
        _attemptsSheet, _usersSheet
      ]) {
        var sheet = spreadsheet.worksheetByTitle(sheetName);
        if (sheet == null) {
          sheet = await spreadsheet.addWorksheet(sheetName);
          switch (sheetName) {
            case _quizzesSheet:
              await sheet.values.insertRow(1, ['quizId', 'topic', 'expiryDate']);
              break;
            case _questionsSheet:
              await sheet.values.insertRow(1, ['questionId', 'quizId', 'questionText', 'correctOptionIndex']);
              break;
            case _optionsSheet:
              await sheet.values.insertRow(1, ['optionId', 'questionId', 'optionText', 'optionIndex']);
              break;
            case _metadataSheet:
              await sheet.values.insertRow(1, ['key', 'value']);
              break;
            case _attemptsSheet:
              await sheet.values.insertRow(1, [
                'timestamp', 'rollNumber', 'quizTopic',
                'score', 'totalQuestions', 'correctAnswers'
              ]);
              break;
            case _usersSheet:
              await sheet.values.insertRow(1, [
                'userId', 'rollNumber', 'timestamp',
                'lastActive', 'quizAttempts'
              ]);
              break;
          }
        }
      }
    });
  }

  /* ========== HELPER METHODS ========== */
  static Future<void> saveQuizzes(List<Quiz> quizzes) async {
    return await _queueWrite(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      
      final quizzesSheet = spreadsheet.worksheetByTitle(_quizzesSheet)!;
      final questionsSheet = spreadsheet.worksheetByTitle(_questionsSheet)!;
      final optionsSheet = spreadsheet.worksheetByTitle(_optionsSheet)!;

      await _clearSheetData(quizzesSheet);
      await _clearSheetData(questionsSheet);
      await _clearSheetData(optionsSheet);

      final quizRows = <List<String>>[];
      final questionRows = <List<String>>[];
      final optionRows = <List<String>>[];

      for (int i = 0; i < quizzes.length; i++) {
        final quiz = quizzes[i];
        final quizId = 'quiz_${i + 1}';
        
        quizRows.add([quizId, quiz.topic, quiz.expiryDate.toIso8601String()]);

        for (int j = 0; j < quiz.questions.length; j++) {
          final question = quiz.questions[j];
          final questionId = '${quizId}_q${j + 1}';
          
          questionRows.add([
            questionId, 
            quizId, 
            question.questionText, 
            question.correctOptionIndex.toString()
          ]);

          for (int k = 0; k < question.options.length; k++) {
            optionRows.add([
              '${questionId}_o${k + 1}',
              questionId,
              question.options[k],
              k.toString()
            ]);
          }
        }
      }

      if (quizRows.isNotEmpty) await quizzesSheet.values.appendRows(quizRows);
      if (questionRows.isNotEmpty) await questionsSheet.values.appendRows(questionRows);
      if (optionRows.isNotEmpty) await optionsSheet.values.appendRows(optionRows);

      // Clear cache
      _cachedQuizzes = null;
      _cacheTimestamp = null;
    });
  }

  static Future<void> updateUserAttempt(String rollNumber) async {
    return await _queueWrite(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_usersSheet)!;
      final rows = await sheet.values.allRows();
      
      for (int i = 0; i < rows.length; i++) {
        if (rows[i].length >= 2 && rows[i][1] == rollNumber) {
          final attempts = int.tryParse(rows[i].length >= 5 ? rows[i][4] : '0') ?? 0;
          await sheet.values.insertValue(
            (attempts + 1).toString(),
            column: 5,
            row: i + 1
          );
          await sheet.values.insertValue(
            DateTime.now().toIso8601String(),
            column: 4,
            row: i + 1
          );
          break;
        }
      }
    });
  }

  static Future<void> _clearSheetData(Worksheet sheet) async {
    try {
      final allRows = await sheet.values.allRows();
      if (allRows.length <= 1) return;
      
      final emptyRows = List.generate(allRows.length - 1, (_) => List<String>.filled(sheet.columnCount, ''));
      await sheet.values.insertRows(2, emptyRows);
    } catch (e) {
      print('Warning: Failed to clear sheet ${sheet.title}: $e');
    }
  }

  static Future<String?> getLastSyncTime() async {
    return await _withRetry(() async {
      await ensureSheetsExist();
      final spreadsheet = await _getSpreadsheet();
      final sheet = spreadsheet.worksheetByTitle(_metadataSheet)!;
      final rows = await sheet.values.allRows();
      
      for (final row in rows) {
        if (row.length >= 2 && row[0] == 'lastSyncTime') {
          try {
            DateTime.parse(row[1]);
            return row[1];
          } catch (e) {
            final excelSerial = double.tryParse(row[1]);
            if (excelSerial != null) {
              return _excelSerialToDateTime(excelSerial).toIso8601String();
            }
          }
        }
      }
      return null;
    });
  }

  static Future<List<Map<String, dynamic>>> getLeaderboard({required String quizTopic}) {
    return getTestLeaderboard(quizTopic);
  }

  // Cleanup method
  static void dispose() {
    _cacheTimers.values.forEach((timer) => timer.cancel());
    _cacheTimers.clear();
    _writeTimer?.cancel();
    _cachedQuizzes = null;
    _cacheTimestamp = null;
    _leaderboardCache.clear();
    _leaderboardCacheTime.clear();
  }
}